// 4/4 박자에서 한 마디를 몇 픽셀로 표기할 것인가
const displaySize = 256;

// 레인별 롱 노트 종료 여부
let sideAlive = [false, false];
let longAlive = [false, false, false, false, false];

// 노트별 참조 리소스
let noteSide = '../side.png';
let noteBlack = '5b.png';
let noteWhite = '5w.png';
let laneWidth = 24;
let sideWidth = 60;

// 해당 레인이 백건반인지 흑건반인지 파악
function getBlackWhite(lane) {
    if (lane == 1 || lane == 3)
        return noteBlack;
    else
        return noteWhite;
}

function makeChart(order, isSideChanged = false) {
    let dataArea = document.getElementById('data');
    if (dataArea) {
        dataArea.remove();
        document.getElementById('order').innerText = `[${Number(order) + 11111} + ${isSideChanged ? 'RL' : 'LR'}]`;
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
        let chipArray = [data[measureNo].A2, data[measureNo].A3, data[measureNo].A4, data[measureNo].A5, data[measureNo].A6];
        let longArray = [data[measureNo].L2, data[measureNo].L3, data[measureNo].L4, data[measureNo].L5, data[measureNo].L6];

        // 레인 재배치
        order = Array.from(order);
        [chipArray[0], chipArray[1], chipArray[2], chipArray[3], chipArray[4]] = [chipArray[order[0]], chipArray[order[1]], chipArray[order[2]], chipArray[order[3]], chipArray[order[4]]];
        [longArray[0], longArray[1], longArray[2], longArray[3], longArray[4]] = [longArray[order[0]], longArray[order[1]], longArray[order[2]], longArray[order[3]], longArray[order[4]]];
        if (isSideChanged) {
            [sideArray[0], sideArray[1]] = [sideArray[1], sideArray[0]];
        }

        // 레인별 롱 노트 최종 위치
        let sidePos = [0, 0];
        let longPos = [0, 0, 0, 0, 0];

        // 사이드 트랙
        for (let lane = 0; lane < sideArray.length; lane++) {
            // 마디가 몇 비트로 구성되었는지
            let bits = !sideArray[lane] ? 0 : sideArray[lane].length / 2;
            for (let pos = 0; pos < bits; pos++) {
                // 02 보이면 해당 위치에 노트 작성
                if (sideArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                    if (!sideAlive[lane]) {
                        // 롱노트 시작점을 체크
                        sidePos[lane] = pos;
                    } else {
                        let note = document.createElement('img');
                        note.src = noteSide;
                        note.setAttribute('style', `bottom: ${sidePos[lane] * displaySize / bits - 1}px; left: ${lane * sideWidth}px; width: ${sideWidth}px; height: ${(pos - sidePos[lane]) * displaySize / bits}px;`);
                        div.appendChild(note);
                    }

                    // 롱노트 사활 토글
                    sideAlive[lane] = !sideAlive[lane];
                }

                // 다음 마디까지 롱노트가 이어질 때
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

        // 칩 노트
        for (let lane = 0; lane < chipArray.length; lane++) {
            // 마디가 몇 비트로 구성되었는지
            let bits = !chipArray[lane] ? 0 : chipArray[lane].length / 2;
            for (let pos = 0; pos < bits; pos++) {
                // 01 보이면 해당 위치에 노트 작성
                if (chipArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                    let note = document.createElement('img');
                    note.src = getBlackWhite(lane);
                    note.setAttribute('style', `bottom: ${pos * displaySize / bits - 1}px; left: ${lane * laneWidth}px;`);
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
                        // 롱노트 시작점을 체크
                        longPos[lane] = pos;
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

function chartDefault() {
    makeChart('01234');
}

function chartCustom() {
    let order = prompt('원하는 랜덤 배치를 입력해주세요.', '12345');
    // 유효하지 않은 경우 중도 취소
    if (order.length != 5) {
        alert('잘못된 입력입니다. 5자리를 맞춰주세요.');
        return;
    }
    let sideOrder = confirm('사이드 트랙을 서로 바꿀까요?');

    // 입력받은 텍스트를 레인 순서로 변경
    order = order - 11111;
    makeChart(order.toString().padStart(5, '0'), sideOrder);
}

function chartMirror() {
    makeChart('43210', true);
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

function chartRandom() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array[i] = i;
    }

    let sideOrder = getRandomInt(0, 2) > 0;

    makeChart(getRandomOrder(array), sideOrder);
}

function chartHalf() {
    let array = [0, 1];
    let order = getRandomOrder(array);
    
    order += '2';
    
    array = [3, 4];
    order += getRandomOrder(array);

    makeChart(order);
}

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
    }
});

chartDefault();