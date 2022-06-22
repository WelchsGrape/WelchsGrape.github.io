// 시작할 때
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();

document.getElementById('date').innerText = `Recent Update: ${year}-${month}-${date}`;

// 함수 목록
function showName(name) {
    document.getElementById('section').innerText = name;
}

function showVersion(version) {
    let dataArea = document.getElementById('data');
    if (dataArea) {
        dataArea.remove();
    }

    // 데이터에서 필터
    let arr = [];
    for (const iterator of data) {
        if (iterator.version == version) {
            arr.push(iterator);
        }
    }

    // // 제목 설정
    // let text = '버전: ';
    // switch (version) {
    //     case 'RS':
    //         text += 'RESPECT';
    //         break;
    //     case 'P1':
    //         text += 'PORTABLE 1';
    //         break;
    //     case 'P2':
    //         text += 'PORTABLE 2';
    //         break;
    //     }
    // text += ` [${arr.length}]`
    // document.getElementById('section').innerText = text;

    // 테이블 생성하고 내용 채우기
    let table = document.createElement('table');
    table.id = 'data';
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('article').appendChild(table);

    let row = document.createElement('tr');
    let itemVersion = document.createElement('th');
    itemVersion.innerHTML = "버전";
    let name = document.createElement('th');
    name.innerHTML = "곡 이름";
    let composer = document.createElement('th');
    composer.innerHTML = "작곡가";
    let BPM = document.createElement('th');
    BPM.innerHTML = "BPM";
    let difficulty4B = document.createElement('th');
    difficulty4B.colSpan = 4;
    difficulty4B.innerHTML = "4B 난이도";
    let difficulty5B = document.createElement('th');
    difficulty5B.colSpan = 4;
    difficulty5B.innerHTML = "5B 난이도";
    let difficulty6B = document.createElement('th');
    difficulty6B.colSpan = 4;
    difficulty6B.innerHTML = "6B 난이도";
    let difficulty8B = document.createElement('th');
    difficulty8B.colSpan = 4;
    difficulty8B.innerHTML = "8B 난이도";

    row.appendChild(itemVersion);
    row.appendChild(name);
    row.appendChild(composer);
    row.appendChild(BPM);
    row.appendChild(difficulty4B);
    row.appendChild(difficulty5B);
    row.appendChild(difficulty6B);
    row.appendChild(difficulty8B);
    thead.appendChild(row);

    for (const iterator of arr) {
        row = document.createElement('tr');
        itemVersion = document.createElement('td');
        itemVersion.innerHTML = `${iterator.version}`;
        name = document.createElement('td');
        name.innerHTML = `${iterator.name}`;
        composer = document.createElement('td');
        composer.innerHTML = `${iterator.composer}`;
        BPM = document.createElement('td');
        BPM.innerHTML = (iterator.maxBPM === null) ? `${iterator.minBPM}` : `${iterator.minBPM} ~ ${iterator.maxBPM}`;

        let NM4B = document.createElement('td');
        NM4B.className = 'difficulty';
        NM4B.innerHTML = `${iterator.NM4}`;
        let HD4B = document.createElement('td');
        HD4B.className = 'difficulty';
        HD4B.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
        let MX4B = document.createElement('td');
        MX4B.className = 'difficulty';
        MX4B.innerHTML = (iterator.MX4 === null) ? ' ' : `${iterator.MX4}`;
        let SC4B = document.createElement('td');
        SC4B.className = 'difficulty';
        SC4B.innerHTML = (iterator.SC4 === null) ? ' ' : `${iterator.SC4}`;

        let NM5B = document.createElement('td');
        NM5B.className = 'difficulty';
        NM5B.innerHTML = `${iterator.NM5}`;
        let HD5B = document.createElement('td');
        HD5B.className = 'difficulty';
        HD5B.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
        let MX5B = document.createElement('td');
        MX5B.className = 'difficulty';
        MX5B.innerHTML = (iterator.MX5 === null) ? ' ' : `${iterator.MX5}`;
        let SC5B = document.createElement('td');
        SC5B.className = 'difficulty';
        SC5B.innerHTML = (iterator.SC5 === null) ? ' ' : `${iterator.SC5}`;

        let NM6B = document.createElement('td');
        NM6B.className = 'difficulty';
        NM6B.innerHTML = `${iterator.NM6}`;
        let HD6B = document.createElement('td');
        HD6B.className = 'difficulty';
        HD6B.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
        let MX6B = document.createElement('td');
        MX6B.className = 'difficulty';
        MX6B.innerHTML = (iterator.MX6 === null) ? ' ' : `${iterator.MX6}`;
        let SC6B = document.createElement('td');
        SC6B.className = 'difficulty';
        SC6B.innerHTML = (iterator.SC6 === null) ? ' ' : `${iterator.SC6}`;

        let NM8B = document.createElement('td');
        NM8B.className = 'difficulty';
        NM8B.innerHTML = `${iterator.NM8}`;
        let HD8B = document.createElement('td');
        HD8B.className = 'difficulty';
        HD8B.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
        let MX8B = document.createElement('td');
        MX8B.className = 'difficulty';
        MX8B.innerHTML = (iterator.MX8 === null) ? ' ' : `${iterator.MX8}`;
        let SC8B = document.createElement('td');
        SC8B.className = 'difficulty';
        SC8B.innerHTML = (iterator.SC8 === null) ? ' ' : `${iterator.SC8}`;
        
        row.appendChild(itemVersion);
        row.appendChild(name);
        row.appendChild(composer);
        row.appendChild(BPM);

        row.appendChild(NM4B);
        row.appendChild(HD4B);
        row.appendChild(MX4B);
        row.appendChild(SC4B);

        row.appendChild(NM5B);
        row.appendChild(HD5B);
        row.appendChild(MX5B);
        row.appendChild(SC5B);

        row.appendChild(NM6B);
        row.appendChild(HD6B);
        row.appendChild(MX6B);
        row.appendChild(SC6B);

        row.appendChild(NM8B);
        row.appendChild(HD8B);
        row.appendChild(MX8B);
        row.appendChild(SC8B);
        tbody.appendChild(row);
    }
}

function showLevel(level) {
    document.getElementById('section').innerText = level;
}

function showSCLevel(level) {
    document.getElementById('section').innerText = level;
}