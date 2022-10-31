// 4/4 박자에서 한 마디를 몇 픽셀로 표기할 것인가
const displaySize = 256;

// 노트별 참조 리소스
let noteSide = '../side.png';
let noteFX = 'fx.png';
let sideWidth = 60;
let noteBlack = '';
let noteWhite = '';
let laneWidth = 0;
let chipSize = 5;
let currentOrder = '';
let isSideChanged = false;

// 노트 별 리소스 할당
function getButtonResources() {
    switch (keys) {
        case 4:
            noteBlack = '4b.png';
            noteWhite = '4w.png';
            laneWidth = 30;
            break;
        case 5:
            noteBlack = '5b.png';
            noteWhite = '5w.png';
            laneWidth = 24;
            break;
        case 6:
        case 8:
            noteBlack = '6b.png';
            noteWhite = '6w.png';
            laneWidth = 20;
            break;
    }
}

// 해당 레인이 백건반인지 흑건반인지 파악
function getBlackWhite(lane) {
    switch (keys) {
        case 4:
            if (lane == 1 || lane == 2) {
                return noteBlack;
            } else {
                return noteWhite;
            }
        case 5:
            if (lane == 1 || lane == 3) {
                return noteBlack;
            } else {
                return noteWhite;
            }
        case 6:
        case 8:
            if (lane == 1 || lane == 4) {
                return noteBlack;
            } else {
                return noteWhite;
            }
    }
}

// 현재 레인 순서를 패턴 아래에 텍스트로 표기
function getTextFromOrder() {
    switch (keys) {
        case 4:
            return `[${Number(currentOrder) + 1111} + ${isSideChanged ? 'RL' : 'LR'}]`;
        case 5:
            return `[${Number(currentOrder) + 11111} + ${isSideChanged ? 'RL' : 'LR'}]`;
        case 6:
        case 8:
            return `[${Number(currentOrder) + 111111} + ${isSideChanged ? 'RL' : 'LR'}]`;
    }
}

// 차트 그리기
function makeChart() {
    // 기존에 생성된 보면이 있다면 지우고 새로 만들기
    let dataArea = document.getElementById('data');
    if (dataArea) {
        dataArea.remove();
        document.getElementById('order').innerText = getTextFromOrder();
    }

    // 전역 틀 만들기
    let globalTable = document.createElement('table');
    let globalTr = document.createElement('tr');
    let globalTd = document.createElement('td');

    globalTable.id = 'data';
    globalTable.appendChild(globalTr);

    document.getElementById('article').appendChild(globalTable);

    globalTd = document.createElement('td');
    globalTr.appendChild(globalTd);

    // 모드별 버튼 리소스 획득
    getButtonResources();

    // 레인별 롱 노트 종료 여부
    let sideAlive = [false, false];
    let FXAlive = [false, false];
    let longAlive = [];
    for (let i = 0; i < (keys == 8 ? 6 : keys); i++) {
        longAlive.push(false);
    }

    // 마디별 노트 작성
    for (let measureNo = 1; measureNo < data.length; measureNo++) {
        // 곡마다 시작 마디를 설정하면 그 번호가 맨 아래로 가게끔 할 수 있다.
        let measureReal = measureNo - measureStart;
        if (measureReal >= 0 && measureReal % 4 == 0) {
            globalTd = document.createElement('td');
            globalTr.appendChild(globalTd);
        }

        // 지역 틀 만들기
        let localTable = document.createElement('table');
        let localTr = document.createElement('tr');
        
        globalTd.insertBefore(localTable, globalTd.firstChild);
        localTable.appendChild(localTr);
        localTable.className = 'fixed';
        
        let localTh = document.createElement('th');
        let localTd = document.createElement('td');
        let div = document.createElement('div');
        
        localTr.appendChild(localTh);
        localTr.appendChild(localTd);
        localTh.innerHTML = measureNo;
        localTd.className = 'chart';
        localTd.appendChild(div);
        
        // 레인별 노트 위치
        let sideArray = [data[measureNo].S1, data[measureNo].S2];
        let chipFXArray = [data[measureNo].A1, data[measureNo].A5];
        let longFXArray = [data[measureNo].L1, data[measureNo].L5];
        let chipArray = [];
        let longArray = [];
        switch (keys) {
            case 4:
                chipArray = [data[measureNo].A2, data[measureNo].A3, data[measureNo].A5, data[measureNo].A6];
                longArray = [data[measureNo].L2, data[measureNo].L3, data[measureNo].L5, data[measureNo].L6];
                break;
            case 5:
                chipArray = [data[measureNo].A2, data[measureNo].A3, data[measureNo].A4, data[measureNo].A5, data[measureNo].A6];
                longArray = [data[measureNo].L2, data[measureNo].L3, data[measureNo].L4, data[measureNo].L5, data[measureNo].L6];
                break;
            case 6:
            case 8:
                chipArray = [data[measureNo].A2, data[measureNo].A3, data[measureNo].A4, data[measureNo].A6, data[measureNo].A7, data[measureNo].A8];
                longArray = [data[measureNo].L2, data[measureNo].L3, data[measureNo].L4, data[measureNo].L6, data[measureNo].L7, data[measureNo].L8];
                break;
        }

        // 롱 노트 최종 위치
        let sidePos = [0, 0];
        let FXPos = [0, 0];
        let longPos = [];
        for (let i = 0; i < (keys == 8 ? 6 : keys); i++) {
            longPos.push(0);
        }

        // 레인 재배치
        if (isSideChanged) {
            [sideArray[0], sideArray[1]] = [sideArray[1], sideArray[0]];
            [chipFXArray[0], chipFXArray[1]] = [chipFXArray[1], chipFXArray[0]];
            [longFXArray[0], longFXArray[1]] = [longFXArray[1], longFXArray[0]];
        }
        let order = Array.from(currentOrder);
        switch (keys) {
            case 4:
                [chipArray[0], chipArray[1], chipArray[2], chipArray[3]] =
                [chipArray[order[0]], chipArray[order[1]], chipArray[order[2]], chipArray[order[3]]];
                [longArray[0], longArray[1], longArray[2], longArray[3]] =
                [longArray[order[0]], longArray[order[1]], longArray[order[2]], longArray[order[3]]];
                break;
            case 5:
                [chipArray[0], chipArray[1], chipArray[2], chipArray[3], chipArray[4]] =
                [chipArray[order[0]], chipArray[order[1]], chipArray[order[2]], chipArray[order[3]], chipArray[order[4]]];
                [longArray[0], longArray[1], longArray[2], longArray[3], longArray[4]] =
                [longArray[order[0]], longArray[order[1]], longArray[order[2]], longArray[order[3]], longArray[order[4]]];
                break;
            case 6:
            case 8:
                [chipArray[0], chipArray[1], chipArray[2], chipArray[3], chipArray[4], chipArray[5]] =
                [chipArray[order[0]], chipArray[order[1]], chipArray[order[2]], chipArray[order[3]], chipArray[order[4]], chipArray[order[5]]];
                [longArray[0], longArray[1], longArray[2], longArray[3], longArray[4], longArray[5]] =
                [longArray[order[0]], longArray[order[1]], longArray[order[2]], longArray[order[3]], longArray[order[4]], longArray[order[5]]];
                break;
        }

        // 사이드 트랙
        for (let lane = 0; lane < sideArray.length; lane++) {
            // 마디가 몇 비트로 구성되었는지
            let bits = !sideArray[lane] ? 0 : sideArray[lane].length / 2;
            for (let pos = 0; pos < bits; pos++) {
                // 01 보이면 해당 위치에 노트 작성
                if (sideArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                    if (!sideAlive[lane]) {
                        sidePos[lane] = pos;    // 사이드 트랙 시작점을 체크
                    } else {
                        let note = document.createElement('img');
                        note.src = noteSide;
                        note.setAttribute('style', `bottom: ${sidePos[lane] * displaySize / bits - 1}px; left: ${lane * sideWidth}px; width: ${sideWidth}px; height: ${(pos - sidePos[lane]) * displaySize / bits}px;`);
                        div.appendChild(note);
                    }

                    sideAlive[lane] = !sideAlive[lane]; // 사이드 트랙 사활 토글
                }

                // 다음 마디까지 사이드 트랙이 이어질 때
                if ((pos == bits - 1) && sideAlive[lane]) {
                    let note = document.createElement('img');
                    note.src = noteSide;
                    note.setAttribute('style', `bottom: ${sidePos[lane] * displaySize / bits - 1}px; left: ${lane * sideWidth}px; width: ${sideWidth}px; height: ${(bits - sidePos[lane]) * displaySize / bits + 1}px;`);
                    div.appendChild(note);
                }
            }

            // 전 마디부터 이번 마디도 꽉 채울 때
            if (sideAlive[lane] && !sideArray[lane]) {
                let note = document.createElement('img');
                note.src = noteSide;
                note.setAttribute('style', `bottom: ${-1}px; left: ${lane * sideWidth}px; width: ${sideWidth}px; height: ${displaySize + 1}px;`);
                div.appendChild(note);
            }
        }

        // FX
        if (keys == 8) {
            // 칩 FX
            for (let lane = 0; lane < chipFXArray.length; lane++) {
                // 마디가 몇 비트로 구성되었는지
                let bits = !chipFXArray[lane] ? 0 : chipFXArray[lane].length / 2;
                for (let pos = 0; pos < bits; pos++) {
                    // 01 보이면 해당 위치에 노트 작성
                    if (chipFXArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                        let note = document.createElement('img');
                        note.src = noteFX;
                        note.setAttribute('style', `bottom: ${pos * displaySize / bits - 1}px; left: ${lane * sideWidth}px; width: ${sideWidth}px; height: ${chipSize}px;`);
                        div.appendChild(note);
                    }
                }
            }
    
            // 롱 FX
            for (let lane = 0; lane < longFXArray.length; lane++) {
                // 마디가 몇 비트로 구성되었는지
                let bits = !longFXArray[lane] ? 0 : longFXArray[lane].length / 2;
                for (let pos = 0; pos < bits; pos++) {
                    // 01 보이면 해당 위치에 노트 작성
                    if (longFXArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                        if (!FXAlive[lane]) {
                            FXPos[lane] = pos;    // 롱 FX 시작점을 체크
                        } else {
                            let note = document.createElement('img');
                            note.src = noteFX;
                            note.setAttribute('style', `bottom: ${FXPos[lane] * displaySize / bits - 1}px; left: ${lane * sideWidth}px; width: ${sideWidth}px; height: ${(pos - FXPos[lane]) * displaySize / bits}px;`);
                            div.appendChild(note);
                        }

                        FXAlive[lane] = !FXAlive[lane]; // 롱 FX 사활 토글
                    }

                    // 다음 마디까지 롱노트가 이어질 때
                    if (FXAlive[lane] && (pos == bits - 1)) {
                        let note = document.createElement('img');
                        note.src = noteFX;
                        note.setAttribute('style', `bottom: ${FXPos[lane] * displaySize / bits - 1}px; left: ${lane * sideWidth}px; width: ${sideWidth}px; height: ${(bits - FXPos[lane]) * displaySize / bits + 1}px;`);
                        div.appendChild(note);
                    }
                }

                // 전 마디부터 이번 마디도 꽉 채울 때
                if (FXAlive[lane] && !longFXArray[lane]) {
                    let note = document.createElement('img');
                    note.src = noteFX;
                    note.setAttribute('style', `bottom: ${-1}px; left: ${lane * sideWidth}px; width: ${sideWidth}px; height: ${displaySize + 1}px;`);
                    div.appendChild(note);
                }
            }
        }

        // 칩 노트
        for (let lane = 0; lane < chipArray.length; lane++) {
            // 마디가 몇 비트로 구성되었는지
            let bits = !chipArray[lane] ? 0 : chipArray[lane].length / 2;
            for (let pos = 0; pos < bits; pos++) {
                // 01 보이면 해당 위치에 노트 작성
                if (chipArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                    let note = document.createElement('img');
                    note.src = getBlackWhite(lane);
                    note.setAttribute('style', `bottom: ${pos * displaySize / bits - 1}px; left: ${lane * laneWidth}px; width: ${laneWidth}px; height: ${chipSize}px;`);
                    div.appendChild(note);
                }
            }
        }

        // 롱 노트
        for (let lane = 0; lane < longArray.length; lane++) {
            // 마디가 몇 비트로 구성되었는지
            let bits = !longArray[lane] ? 0 : longArray[lane].length / 2;
            for (let pos = 0; pos < bits; pos++) {
                // 01 보이면 해당 위치에 노트 작성
                if (longArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                    if (!longAlive[lane]) {
                        longPos[lane] = pos;    // 롱노트 시작점을 체크
                    } else {
                        let note = document.createElement('img');
                        note.src = getBlackWhite(lane);
                        note.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * laneWidth}px; width: ${laneWidth}px; height: ${(pos - longPos[lane]) * displaySize / bits}px;`);
                        div.appendChild(note);
                    }

                    // 롱노트 사활 토글
                    longAlive[lane] = !longAlive[lane];
                }

                // 다음 마디까지 롱노트가 이어질 때
                if (longAlive[lane] && (pos == bits - 1)) {
                    let note = document.createElement('img');
                    note.src = getBlackWhite(lane);
                    note.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * laneWidth}px; width: ${laneWidth}px; height: ${(bits - longPos[lane]) * displaySize / bits + 1}px;`);
                    div.appendChild(note);
                }
            }

            // 전 마디부터 이번 마디도 꽉 채울 때
            if (longAlive[lane] && !longArray[lane]) {
                let note = document.createElement('img');
                note.src = getBlackWhite(lane);
                note.setAttribute('style', `bottom: ${-1}px; left: ${lane * laneWidth}px; width: ${laneWidth}px; height: ${displaySize + 1}px;`);
                div.appendChild(note);
            }
        }
    }
}

// 칩 노트 크기 설정
function setChipSize() {
    chipSize = Number(prompt('칩 노트 크기를 설정해 주세요.', 5));
    makeChart();
}

// 정규 배치 생성
function chartDefault() {
    switch (keys) {
        case 4:
            currentOrder = '0123';
            break;
        case 5:
            currentOrder = '01234';
            break;
        case 6:
        case 8:
            currentOrder = '012345';
            break;
    }

    isSideChanged = false;
    makeChart();
}

// 입력받은 텍스트를 재배치할 레인으로 변환
function getOrderFromText(order) {
    switch (keys) {
        case 4:
            order -= 1111;
            break;
        case 5:
            order -= 11111;
            break;
        case 6:
        case 8:
            order -= 111111;
            break;
    }

    return order.toString().padStart(keys == 8 ? 6 : keys, '0');
}

// 커스텀 배치 생성
function chartCustom() {
    let example = '';

    switch (keys) {
        case 4:
            example = '1234';
            break;
        case 5:
            example = '12345';
            break;
        case 6:
        case 8:
            example = '123456';
            break;
    }

    let order = prompt('원하는 랜덤 배치를 입력해주세요.', example);
    // 유효하지 않은 경우 중도 취소
    if (order.length != (keys == 8 ? 6 : keys)) {
        alert('잘못된 입력입니다. 키 수를 맞춰주세요.');
        return;
    }

    isSideChanged = confirm('사이드 트랙을 서로 바꿀까요?');

    // 입력받은 텍스트를 레인 순서로 변경
    currentOrder = getOrderFromText(order);
    makeChart();
}

// 미러 배치 생성
function chartMirror() {
    switch (keys) {
        case 4:
            currentOrder = '3210';
            break;
        case 5:
            currentOrder = '43210';
            break;
        case 6:
        case 8:
            currentOrder = '543210';
            break;
    }

    isSideChanged = true;
    makeChart();
}

// 최소 이상 최대 미만에서 임의의 정수 생성
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// 배열이 주어졌을 때 임의의 레인을 생성
function getRandomOrder(array) {
    let order = '';
    while (array.length > 0) {
        let num = getRandomInt(0, array.length);
        order += array[num] + '';
        array.splice(num, 1);
    }
    return order;
}

// 랜덤 배치 생성
function chartRandom() {
    let array = [];
    for (let i = 0; i < (keys == 8 ? 6 : keys); i++) {
        array[i] = i;
    }

    // 사이드는 참 거짓만 판단하면 됨
    currentOrder = getRandomOrder(array);
    isSideChanged = Math.random() < 0.5;
    makeChart();
}

// 하프 랜덤 배치 생성
function chartHalf() {
    let left = [];
    let middle = '2';
    let right = [];

    switch (keys) {
        case 4:
        case 5:
            left = [0, 1];
            right = [2, 3];
        break;
        case 6:
        case 8:
            left = [0, 1, 2];
            right = [3, 4, 5];
        break;
    }

    currentOrder = getRandomOrder(left);
    if (keys == 5) {
        currentOrder += middle;
    }
    currentOrder += getRandomOrder(right);

    makeChart();
}

// 키보드 입력 받기
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case 'd':
        case 'D':
            chartDefault();
            break;
        case 'c':
        case 'C':
            chartCustom();
            break;
        case 'm':
        case 'M':
            chartMirror();
            break;
        case 'r':
        case 'R':
            chartRandom();
            break;
        case 'h':
        case 'H':
            chartHalf();
            break;
        case 's':
        case 'S':
            setChipSize();
            break;
    }
});

chartDefault();