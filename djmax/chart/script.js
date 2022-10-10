const displaySize = 192;

let globalTable = document.createElement('table');
let globalTr = document.createElement('tr');
let globalTd = document.createElement('td');

globalTable.appendChild(globalTr);

document.getElementById('article').appendChild(globalTable);

// 롱노트 종료 여부
let longAlive = [false, false, false, false];

globalTd = document.createElement('td');
globalTr.appendChild(globalTd);

// 시작 마디 이전
for (let measureNo = 0; measureNo < measureStart; measureNo++) {

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

    // 칩 노트 넣기
    let refArray = [data[measureNo].A2, data[measureNo].A3, data[measureNo].A5, data[measureNo].A6];
    for (let lane = 0; lane < 4; lane++) {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2;
        for (let pos = 0; pos < bits; pos++) {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                let noteChip = document.createElement('img');
                if (lane == 0 || lane == 3)
                    noteChip.src = 'd4w.png';
                else
                    noteChip.src = 'd4b.png';
                noteChip.alt = '';
                noteChip.setAttribute('style', `bottom: ${pos * displaySize / bits - 1}px; left: ${lane * 30}px;`);
                div.appendChild(noteChip);
            }
        }
    }

    // 롱 노트 넣기
    let longPos = [0, 0, 0, 0];
    refArray = [data[measureNo].L2, data[measureNo].L3, data[measureNo].L5, data[measureNo].L6];
    for (let lane = 0; lane < 4; lane++) {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2;
        for (let pos = 0; pos < bits; pos++) {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                if (!longAlive[lane]) {
                    longPos[lane] = pos;
                    longAlive[lane] = true;
                } else {
                    longAlive[lane] = false;

                    let noteLong = document.createElement('img');
                    if (lane == 0 || lane == 3)
                        noteLong.src = 'd4w.png';
                    else
                        noteLong.src = 'd4b.png';
                    noteLong.alt = '';
                    noteLong.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * 30}px; width: ${30}px; height: ${(pos - longPos[lane]) * displaySize / bits}px;`);
                    div.appendChild(noteLong);
                }
            }

            // 다음 마디까지 롱노트가 이어질 때
            if ((pos == bits - 1) && longAlive[lane]) {
                let noteLong = document.createElement('img');
                if (lane == 0 || lane == 3)
                    noteLong.src = 'd4w.png';
                else
                    noteLong.src = 'd4b.png';
                noteLong.alt = '';
                noteLong.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * 30}px; width: ${30}px; height: ${(bits - longPos[lane]) * displaySize / bits + 1}px;`);
                div.appendChild(noteLong);
            }
        }
    }

    // 사이드 노트 넣기
    let sidePos = [0, 0, 0, 0];
    refArray = [data[measureNo].L1, data[measureNo].L7];
    for (let lane = 0; lane < 2; lane++) {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2;
        for (let pos = 0; pos < bits; pos++) {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '02') {
                if (!longAlive[lane]) {
                    sidePos[lane] = pos;
                    longAlive[lane] = true;
                } else {
                    longAlive[lane] = false;

                    let noteLong = document.createElement('img');
                    noteLong.src = '../side.png';
                    noteLong.alt = '';
                    noteLong.setAttribute('style', `bottom: ${sidePos[lane] * displaySize / bits - 1}px; left: ${lane * 60}px; width: ${60}px; height: ${(pos - sidePos[lane]) * displaySize / bits}px;`);
                    div.appendChild(noteLong);
                }
            }

            // 다음 마디까지 롱노트가 이어질 때
            if ((pos == bits - 1) && longAlive[lane]) {
                let noteLong = document.createElement('img');
                noteLong.src = '../side.png';
                noteLong.alt = '';
                noteLong.setAttribute('style', `bottom: ${sidePos[lane] * displaySize / bits - 1}px; left: ${lane * 60}px; width: ${60}px; height: ${(bits - sidePos[lane]) * displaySize / bits + 1}px;`);
                div.appendChild(noteLong);
            }
        }
    }
}

let measureEnd = parseInt(data.length / 4) * 4 + measureStart;

// 시작 마디 이후
for (let measureNo = measureStart; measureNo < measureEnd; measureNo++) {
    let measureReal = measureNo - measureStart;
    if (measureReal % 4 == 0) {
        globalTd = document.createElement('td');
        globalTr.appendChild(globalTd);
    }

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

    // 칩 노트 넣기
    let refArray = [data[measureNo].A2, data[measureNo].A3, data[measureNo].A5, data[measureNo].A6];
    for (let lane = 0; lane < 4; lane++) {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2;
        for (let pos = 0; pos < bits; pos++) {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                let noteChip = document.createElement('img');
                if (lane == 0 || lane == 3)
                    noteChip.src = 'd4w.png';
                else
                    noteChip.src = 'd4b.png';
                noteChip.alt = '';
                noteChip.setAttribute('style', `bottom: ${pos * displaySize / bits - 1}px; left: ${lane * 30}px;`);
                div.appendChild(noteChip);
            }
        }
    }

    // 롱 노트 넣기
    let longPos = [0, 0, 0, 0]; // 롱노트 최종 위치가 어딘지 저장
    refArray = [data[measureNo].L2, data[measureNo].L3, data[measureNo].L5, data[measureNo].L6];
    for (let lane = 0; lane < 4; lane++) {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2; // 마디가 몇 비트로 구성되었는지
        for (let pos = 0; pos < bits; pos++) {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                if (!longAlive[lane]) {
                    longPos[lane] = pos;
                    longAlive[lane] = true;
                } else {
                    longAlive[lane] = false;

                    let noteLong = document.createElement('img');
                    if (lane == 0 || lane == 3)
                        noteLong.src = 'd4w.png';
                    else
                        noteLong.src = 'd4b.png';
                    noteLong.alt = '';
                    noteLong.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * 30}px; width: ${30}px; height: ${(pos - longPos[lane]) * displaySize / bits}px;`);
                    div.appendChild(noteLong);
                }
            }

            // 다음 마디까지 롱노트가 이어질 때
            if (longAlive[lane] && (pos == bits - 1)) {
                let noteLong = document.createElement('img');
                if (lane == 0 || lane == 3)
                    noteLong.src = 'd4w.png';
                else
                    noteLong.src = 'd4b.png';
                noteLong.alt = '';
                noteLong.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * 30}px; width: ${30}px; height: ${(bits - longPos[lane]) * displaySize / bits + 1}px;`);
                div.appendChild(noteLong);
            }
        }

        // 전 마디부터 이번 마디도 꽉 채울 때
        if (longAlive[lane] && !refArray[lane]) {
            let noteLong = document.createElement('img');
            if (lane == 0 || lane == 3)
                noteLong.src = 'd4w.png';
            else
                noteLong.src = 'd4b.png';
            noteLong.alt = '';
            noteLong.setAttribute('style', `bottom: ${-1}px; left: ${lane * 30}px; width: ${30}px; height: ${displaySize}px;`);
            div.appendChild(noteLong);
        }
    }
    
    // 사이드 노트 넣기
    let sidePos = [0, 0, 0, 0];
    refArray = [data[measureNo].L1, data[measureNo].L7];
    for (let lane = 0; lane < 2; lane++) {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2;
        for (let pos = 0; pos < bits; pos++) {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '02') {
                if (!longAlive[lane]) {
                    sidePos[lane] = pos;
                    longAlive[lane] = true;
                } else {
                    longAlive[lane] = false;

                    let noteLong = document.createElement('img');
                    noteLong.src = '../side.png';
                    noteLong.alt = '';
                    noteLong.setAttribute('style', `bottom: ${sidePos[lane] * displaySize / bits - 1}px; left: ${lane * 60}px; width: ${60}px; height: ${(pos - sidePos[lane]) * displaySize / bits}px;`);
                    div.appendChild(noteLong);
                }
            }

            // 다음 마디까지 롱노트가 이어질 때
            if ((pos == bits - 1) && longAlive[lane]) {
                let noteLong = document.createElement('img');
                noteLong.src = '../side.png';
                noteLong.alt = '';
                noteLong.setAttribute('style', `bottom: ${sidePos[lane] * displaySize / bits - 1}px; left: ${lane * 60}px; width: ${60}px; height: ${(bits - sidePos[lane]) * displaySize / bits + 1}px;`);
                div.appendChild(noteLong);
            }
        }
    }
}

let remainder = data.length - measureEnd;

globalTd = document.createElement('td');
globalTr.appendChild(globalTd);
globalTd.setAttribute('valign', 'bottom');

// 마지막 부분
for (let measureNo = measureEnd; measureNo < data.length; measureNo++) {
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

    // 칩 노트 넣기
    let refArray = [data[measureNo].A2, data[measureNo].A3, data[measureNo].A5, data[measureNo].A6];
    for (let lane = 0; lane < 4; lane++) {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2;
        for (let pos = 0; pos < bits; pos++) {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                let noteChip = document.createElement('img');
                if (lane == 0 || lane == 3)
                    noteChip.src = 'd4w.png';
                else
                    noteChip.src = 'd4b.png';
                noteChip.alt = '';
                noteChip.setAttribute('style', `bottom: ${pos * displaySize / bits - 1}px; left: ${lane * 30}px;`);
                div.appendChild(noteChip);
            }
        }
    }

    // 롱 노트 넣기
    let longPos = [0, 0, 0, 0];
    refArray = [data[measureNo].L2, data[measureNo].L3, data[measureNo].L5, data[measureNo].L6];
    for (let lane = 0; lane < 4; lane++) {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2;
        for (let pos = 0; pos < bits; pos++) {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '01') {
                if (!longAlive[lane]) {
                    longPos[lane] = pos;
                    longAlive[lane] = true;
                } else {
                    longAlive[lane] = false;

                    let noteLong = document.createElement('img');
                    if (lane == 0 || lane == 3)
                        noteLong.src = 'd4w.png';
                    else
                        noteLong.src = 'd4b.png';
                    noteLong.alt = '';
                    noteLong.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * 30}px; width: ${30}px; height: ${(pos - longPos[lane]) * displaySize / bits}px;`);
                    div.appendChild(noteLong);
                }
            }

            // 다음 마디까지 롱노트가 이어질 때
            if ((pos == bits - 1) && longAlive[lane]) {
                let noteLong = document.createElement('img');
                if (lane == 0 || lane == 3)
                    noteLong.src = 'd4w.png';
                else
                    noteLong.src = 'd4b.png';
                noteLong.alt = '';
                noteLong.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * 30}px; width: ${30}px; height: ${(bits - longPos[lane]) * displaySize / bits + 1}px;`);
                div.appendChild(noteLong);
            }
        }
    }
    
    // 사이드 노트 넣기
    let sidePos = [0, 0, 0, 0];
    refArray = [data[measureNo].L1, data[measureNo].L7];
    for (let lane = 0; lane < 2; lane++) {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2;
        for (let pos = 0; pos < bits; pos++) {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '02') {
                if (!longAlive[lane]) {
                    sidePos[lane] = pos;
                    longAlive[lane] = true;
                } else {
                    longAlive[lane] = false;

                    let noteLong = document.createElement('img');
                    noteLong.src = '../side.png';
                    noteLong.alt = '';
                    noteLong.setAttribute('style', `bottom: ${sidePos[lane] * displaySize / bits - 1}px; left: ${lane * 60}px; width: ${60}px; height: ${(pos - sidePos[lane]) * displaySize / bits}px;`);
                    div.appendChild(noteLong);
                }
            }

            // 다음 마디까지 롱노트가 이어질 때
            if ((pos == bits - 1) && longAlive[lane]) {
                let noteLong = document.createElement('img');
                noteLong.src = '../side.png';
                noteLong.alt = '';
                noteLong.setAttribute('style', `bottom: ${sidePos[lane] * displaySize / bits - 1}px; left: ${lane * 60}px; width: ${60}px; height: ${(bits - sidePos[lane]) * displaySize / bits + 1}px;`);
                div.appendChild(noteLong);
            }
        }

        // 전 마디부터 이번 마디도 꽉 채울 때
        if (longAlive[lane] && !refArray[lane]) {
            let noteLong = document.createElement('img');
            noteLong.src = '../side.png';
            noteLong.alt = '';
            noteLong.setAttribute('style', `bottom: ${-1}px; left: ${lane * 60}px; width: ${60}px; height: ${displaySize}px;`);
            div.appendChild(noteLong);
        }
    }
}
