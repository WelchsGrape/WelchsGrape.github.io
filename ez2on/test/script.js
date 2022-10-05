const displaySize = 192;

let globalTable = document.createElement('table');
let globalTr = document.createElement('tr');
let globalTd = document.createElement('td');

globalTable.appendChild(globalTr);

document.getElementById('article').appendChild(globalTable);

for (let measureNo = 0; measureNo < 30; measureNo++)
{
    if (measureNo % 4 == 0)
    {
        globalTd = document.createElement('td');
        globalTr.appendChild(globalTd);
    }

    let localTable = document.createElement('table');
    let localTr = document.createElement('tr');
    
    globalTd.insertBefore(localTable, globalTd.firstChild);
    localTable.appendChild(localTr);
    
    let localTh = document.createElement('th');
    let localTd = document.createElement('td');
    let div = document.createElement('div');
    
    localTr.appendChild(localTh);
    localTr.appendChild(localTd);
    localTh.innerHTML = measureNo;
    localTd.className = 'chart';
    localTd.appendChild(div);

    // 노트 넣기
    let refArray = [data[measureNo].A2, data[measureNo].A3, data[measureNo].A5, data[measureNo].A6];
    console.log(refArray[3]);
    for (let lane = 0; lane < 4; lane++)
    {
        let bits = !refArray[lane] ? 0 : refArray[lane].length / 2;
        console.log(bits);
        for (let pos = 0; pos < bits; pos++)
        {
            if (refArray[lane].substring(pos * 2, (pos + 1) * 2) == '01')
            {
                let button = document.createElement('img');
                if (lane == 0 || lane == 3)
                    button.src = 'e4w.png';
                else
                    button.src = 'e4b.png';
                button.alt = '';
                button.setAttribute('style', `bottom: ${pos * displaySize / bits}px; left: ${lane * 30}px;`);
                div.appendChild(button);
            }
        }
    }
}
