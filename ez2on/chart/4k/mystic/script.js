const displaySize = 192;

let globalTable = document.createElement('table');
let globalTr = document.createElement('tr');
let globalTd = document.createElement('td');

globalTable.appendChild(globalTr);

document.getElementById('article').appendChild(globalTable);

// 롱노트 종료 여부
let longAlive = [false, false, false, false];
for (let measureNo = 0; measureNo < data.length; measureNo++) {
    if (measureNo % 4 == 0) {
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
                    noteChip.src = 'e4w.png';
                else
                    noteChip.src = 'e4b.png';
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
                        noteLong.src = 'e4w.png';
                    else
                        noteLong.src = 'e4b.png';
                    noteLong.alt = '';
                    noteLong.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * 30}px; width: ${30}px; height: ${(pos - longPos[lane]) * displaySize / bits}px;`);
                    div.appendChild(noteLong);
                }
            }

            // 다음 마디까지 롱노트가 이어질 때
            if ((pos == bits - 1) && longAlive[lane]) {
                let noteLong = document.createElement('img');
                if (lane == 0 || lane == 3)
                    noteLong.src = 'e4w.png';
                else
                    noteLong.src = 'e4b.png';
                noteLong.alt = '';
                noteLong.setAttribute('style', `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * 30}px; width: ${30}px; height: ${(bits - longPos[lane]) * displaySize / bits + 1}px;`);
                div.appendChild(noteLong);
            }
        }
    }


}
