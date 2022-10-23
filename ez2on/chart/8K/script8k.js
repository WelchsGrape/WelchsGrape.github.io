// 4/4 박자에서 한 마디를 몇 픽셀로 표기할 것인가
const displaySize = 256;

// 레인별 롱 노트 종료 여부
let longAlive = [false, false, false, false, false, false, false, false];

// 노트별 참조 리소스
let noteBlack = '8b.png';
let noteGreen = '8g.png';
let noteWhite = '8w.png';
let laneWidth = 15;

// 해당 레인이 백건반인지 흑건반인지 파악
function getBlackWhite(lane) {
    if (lane == 2 || lane == 5)
        return noteBlack;
    else if (lane == 0 || lane == 7)
        return noteGreen;
    else
        return noteWhite;
}

// 전역 틀 만들기
let globalTable = document.createElement('table');
let globalTr = document.createElement('tr');
let globalTd = document.createElement('td');

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
    let chipArray = [data[measureNo].A1, data[measureNo].A2, data[measureNo].A3, data[measureNo].A4, data[measureNo].A5, data[measureNo].A6, data[measureNo].A7, data[measureNo].A8];
    let longArray = [data[measureNo].L1, data[measureNo].L2, data[measureNo].L3, data[measureNo].L4, data[measureNo].L5, data[measureNo].L6, data[measureNo].L7, data[measureNo].L8];

    // 레인별 롱 노트 최종 위치
    let longPos = [0, 0, 0, 0, 0, 0, 0, 0];

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