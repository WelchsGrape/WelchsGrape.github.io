// 이미 만들어진 테이블을 삭제
function removeTable() {
    document.getElementById('section').innerText = '';

    let dataArea = document.getElementById('data');
    if (dataArea) {
        dataArea.remove();
    }    
}

function removeFirstWord(str) {
    const indexOfSpace = str.indexOf(' ');
  
    if (indexOfSpace === -1) {
        return '';
    }
  
    return str.substring(indexOfSpace + 1);
}

// 함수 목록
function showName(paramName) {
    removeTable();

    let arr = [];
    const numbers = /[0-9]/;
    const alphabet = /[a-zA-Z]/;
    for (const iterator of data) {
        // 첫 글자가 The인 경우
        const isItTHE = iterator.name.slice(0, 3);
        if (isItTHE == 'The') {
            const songName = removeFirstWord(iterator.name);
            if (paramName == '#') {
                if (numbers.test(songName.charAt(0))) {
                    arr.push(iterator);
                }
            } else if (paramName == '가') {
                if (!numbers.test(songName.charAt(0))
                && !alphabet.test(songName.charAt(0))) {
                    arr.push(iterator);
                }
            } else {
                if (songName.charAt(0) == paramName
                || songName.charAt(0) == paramName.toLowerCase()) {
                    arr.push(iterator);
                }
            }
        } else if (iterator.name.charAt(0) == '#') { // 첫 글자가 #인 경우
            if (paramName == '#') {
                if (numbers.test(iterator.name.charAt(1))) {
                    arr.push(iterator);
                }
            } else if (paramName == '가') {
                if (!numbers.test(iterator.name.charAt(1))
                && !alphabet.test(iterator.name.charAt(1))) {
                    arr.push(iterator);
                }
            } else {
                if (iterator.name.charAt(1) == paramName
                || iterator.name.charAt(1) == paramName.toLowerCase()) {
                    arr.push(iterator);
                }
            }
        } else {
            if (paramName == '#') {
                if (numbers.test(iterator.name.charAt(0))) {
                    arr.push(iterator);
                }
            } else if (paramName == '가') {
                if (!numbers.test(iterator.name.charAt(0))
                && !alphabet.test(iterator.name.charAt(0))) {
                    arr.push(iterator);
                }
            } else {
                if (iterator.name.charAt(0) == paramName
                || iterator.name.charAt(0) == paramName.toLowerCase()) {
                    arr.push(iterator);
                }
            }
        }
    }

    // 제목 설정
    document.getElementById('section').innerText = `곡 이름: ${paramName} [${arr.length}]`;

    // 테이블 생성하고 내용 채우기
    let table = document.createElement('table');
    table.id = 'data';
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('article').appendChild(table);

    // 첫 행 만들기
    let row = document.createElement('tr');

    let series = document.createElement('th');
    series.innerHTML = "시리즈";
    row.appendChild(series);

    let name = document.createElement('th');
    name.innerHTML = "곡 이름";
    row.appendChild(name);

    let composer = document.createElement('th');
    composer.innerHTML = "작곡가";
    row.appendChild(composer);

    let BPM = document.createElement('th');
    BPM.innerHTML = "BPM";
    row.appendChild(BPM);
    
    let BSC;
    if (!document.getElementById('key8').checked) {
        BSC = document.createElement('th');
        BSC.innerHTML = "BSC";
        row.appendChild(BSC);
    }
    
    let EZ = document.createElement('th');
    EZ.innerHTML = "EZ";
    row.appendChild(EZ);
    
    let NM = document.createElement('th');
    NM.innerHTML = "NM";
    row.appendChild(NM);
    
    let HD = document.createElement('th');
    HD.innerHTML = "HD";
    row.appendChild(HD);
    
    let SHD = document.createElement('th');
    SHD.innerHTML = "SHD";
    row.appendChild(SHD);

    thead.appendChild(row);

    // 데이터 채우기
    for (const iterator of arr) {
        row = document.createElement('tr');

        series = document.createElement('td');
        series.innerHTML = `${iterator.version}`;
        row.appendChild(series);

        name = document.createElement('td');
        name.innerHTML = `${iterator.name}`;
        name.className = 'songname';
        row.appendChild(name);

        composer = document.createElement('td');
        composer.innerHTML = `${iterator.composer}`;
        composer.className = 'composer';
        row.appendChild(composer);

        BPM = document.createElement('td');
        BPM.innerHTML = (iterator.maxBPM === null) ? `${iterator.minBPM}` : `${iterator.minBPM} ~ ${iterator.maxBPM}`;
        row.appendChild(BPM);

        if (!document.getElementById('key8').checked) {
            BSC = document.createElement('td');
            BSC.className = 'difficulty';
        }

        EZ = document.createElement('td');
        EZ.className = 'difficulty';

        NM = document.createElement('td');
        NM.className = 'difficulty';

        HD = document.createElement('td');
        HD.className = 'difficulty';

        SHD = document.createElement('td');
        SHD.className = 'difficulty';

        if (document.getElementById('key4').checked) {
            BSC.innerHTML = (iterator.BSC4 === null) ? ' ' : `${iterator.BSC4}`;
            EZ.innerHTML = (iterator.EZ4 === null) ? ' ' : `${iterator.EZ4}`;
            NM.innerHTML = (iterator.NM4 === null) ? ' ' : `${iterator.NM4}`;
            HD.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            SHD.innerHTML = (iterator.SHD4 === null) ? ' ' : `${iterator.SHD4}`;
        } else if (document.getElementById('key5').checked) {
            BSC.innerHTML = (iterator.BSC5 === null) ? ' ' : `${iterator.BSC5}`;
            EZ.innerHTML = (iterator.EZ5 === null) ? ' ' : `${iterator.EZ5}`;
            NM.innerHTML = (iterator.NM5 === null) ? ' ' : `${iterator.NM5}`;
            HD.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            SHD.innerHTML = (iterator.SHD5 === null) ? ' ' : `${iterator.SHD5}`;
        } else if (document.getElementById('key6').checked) {
            BSC.innerHTML = (iterator.BSC6 === null) ? ' ' : `${iterator.BSC6}`;
            EZ.innerHTML = (iterator.EZ6 === null) ? ' ' : `${iterator.EZ6}`;
            NM.innerHTML = (iterator.NM6 === null) ? ' ' : `${iterator.NM6}`;
            HD.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            SHD.innerHTML = (iterator.SHD6 === null) ? ' ' : `${iterator.SHD6}`;
        } else if (document.getElementById('key8').checked) {
            EZ.innerHTML = (iterator.EZ8 === null) ? ' ' : `${iterator.EZ8}`;
            NM.innerHTML = (iterator.NM8 === null) ? ' ' : `${iterator.NM8}`;
            HD.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
            SHD.innerHTML = (iterator.SHD8 === null) ? ' ' : `${iterator.SHD8}`;
        }

        if (!document.getElementById('key8').checked) {
            row.appendChild(BSC);
        }
        row.appendChild(EZ);
        row.appendChild(NM);
        row.appendChild(HD);
        row.appendChild(SHD);

        tbody.appendChild(row);
    }
}

function showSeries(paramVersion) {
    removeTable();

    // json에서 필터한 내용을 담을 배열
    let arr = [];
    // 올 트랙일 경우 데이터를 그대로 쓴다
    if (paramVersion == 'ALL') {
        arr = data;
    } else {
        for (const iterator of data) {
            if (iterator.version == paramVersion) {  // 뮤직 팩별 필터
                arr.push(iterator);
            }
        }
    }

    // 제목 설정
    document.getElementById('section').innerText = `시리즈: ${paramVersion} [${arr.length}]`;

    // 테이블 생성하고 내용 채우기
    let table = document.createElement('table');
    table.id = 'data';
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('article').appendChild(table);

    // 첫 행 만들기
    let row = document.createElement('tr');

    let name = document.createElement('th');
    name.innerHTML = "곡 이름";
    row.appendChild(name);

    let composer = document.createElement('th');
    composer.innerHTML = "작곡가";
    row.appendChild(composer);

    let BPM = document.createElement('th');
    BPM.innerHTML = "BPM";
    row.appendChild(BPM);
    
    let BSC;
    if (!document.getElementById('key8').checked) {
        BSC = document.createElement('th');
        BSC.innerHTML = "BSC";
        row.appendChild(BSC);
    }
    
    let EZ = document.createElement('th');
    EZ.innerHTML = "EZ";
    row.appendChild(EZ);
    
    let NM = document.createElement('th');
    NM.innerHTML = "NM";
    row.appendChild(NM);
    
    let HD = document.createElement('th');
    HD.innerHTML = "HD";
    row.appendChild(HD);
    
    let SHD = document.createElement('th');
    SHD.innerHTML = "SHD";
    row.appendChild(SHD);

    thead.appendChild(row);

    // 데이터 채우기
    for (const iterator of arr) {
        row = document.createElement('tr');

        name = document.createElement('td');
        name.innerHTML = `${iterator.name}`;
        name.className = 'songname';
        row.appendChild(name);

        composer = document.createElement('td');
        composer.innerHTML = `${iterator.composer}`;
        composer.className = 'composer';
        row.appendChild(composer);

        BPM = document.createElement('td');
        BPM.innerHTML = (iterator.maxBPM === null) ? `${iterator.minBPM}` : `${iterator.minBPM} ~ ${iterator.maxBPM}`;
        row.appendChild(BPM);

        if (!document.getElementById('key8').checked) {
            BSC = document.createElement('td');
            BSC.className = 'difficulty';
        }

        EZ = document.createElement('td');
        EZ.className = 'difficulty';

        NM = document.createElement('td');
        NM.className = 'difficulty';

        HD = document.createElement('td');
        HD.className = 'difficulty';

        SHD = document.createElement('td');
        SHD.className = 'difficulty';

        if (document.getElementById('key4').checked) {
            BSC.innerHTML = (iterator.BSC4 === null) ? ' ' : `${iterator.BSC4}`;
            EZ.innerHTML = (iterator.EZ4 === null) ? ' ' : `${iterator.EZ4}`;
            NM.innerHTML = (iterator.NM4 === null) ? ' ' : `${iterator.NM4}`;
            HD.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            SHD.innerHTML = (iterator.SHD4 === null) ? ' ' : `${iterator.SHD4}`;
        } else if (document.getElementById('key5').checked) {
            BSC.innerHTML = (iterator.BSC5 === null) ? ' ' : `${iterator.BSC5}`;
            EZ.innerHTML = (iterator.EZ5 === null) ? ' ' : `${iterator.EZ5}`;
            NM.innerHTML = (iterator.NM5 === null) ? ' ' : `${iterator.NM5}`;
            HD.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            SHD.innerHTML = (iterator.SHD5 === null) ? ' ' : `${iterator.SHD5}`;
        } else if (document.getElementById('key6').checked) {
            BSC.innerHTML = (iterator.BSC6 === null) ? ' ' : `${iterator.BSC6}`;
            EZ.innerHTML = (iterator.EZ6 === null) ? ' ' : `${iterator.EZ6}`;
            NM.innerHTML = (iterator.NM6 === null) ? ' ' : `${iterator.NM6}`;
            HD.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            SHD.innerHTML = (iterator.SHD6 === null) ? ' ' : `${iterator.SHD6}`;
        } else if (document.getElementById('key8').checked) {
            EZ.innerHTML = (iterator.EZ8 === null) ? ' ' : `${iterator.EZ8}`;
            NM.innerHTML = (iterator.NM8 === null) ? ' ' : `${iterator.NM8}`;
            HD.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
            SHD.innerHTML = (iterator.SHD8 === null) ? ' ' : `${iterator.SHD8}`;
        }

        if (!document.getElementById('key8').checked) {
            row.appendChild(BSC);
        }
        row.appendChild(EZ);
        row.appendChild(NM);
        row.appendChild(HD);
        row.appendChild(SHD);

        tbody.appendChild(row);
    }
}

function showLevel(level) {
    removeTable();

    // json에서 필터
    let arr = [];
    for (const iterator of data) {
        if (document.getElementById('key4').checked) {
            if (iterator.BSC4 == level ||
                iterator.EZ4 == level ||
                iterator.NM4 == level ||
                iterator.HD4 == level ||
                iterator.SHD4 == level) {
                arr.push(iterator);
            }
        } else if (document.getElementById('key5').checked) {
            if (iterator.BSC5 == level ||
                iterator.EZ5 == level ||
                iterator.NM5 == level ||
                iterator.HD5 == level ||
                iterator.SHD5 == level) {
                arr.push(iterator);
            }
        } else if (document.getElementById('key6').checked) {
            if (iterator.BSC6 == level ||
                iterator.EZ6 == level ||
                iterator.NM6 == level ||
                iterator.HD6 == level ||
                iterator.SHD6 == level) {
                arr.push(iterator);
            }
        } else if (document.getElementById('key8').checked) {
            if (iterator.EZ8 == level ||
                iterator.NM8 == level ||
                iterator.HD8 == level ||
                iterator.SHD8 == level) {
                arr.push(iterator);
            }
        }
    }

    // 제목 설정
    document.getElementById('section').innerText = `레벨: ${level} [${arr.length}]`;

    // 테이블 생성하고 내용 채우기
    let table = document.createElement('table');
    table.id = 'data';
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('article').appendChild(table);

    // 첫 행 만들기
    let row = document.createElement('tr');

    let version = document.createElement('th');
    version.innerHTML = "시리즈";
    row.appendChild(version);

    let name = document.createElement('th');
    name.innerHTML = "곡 이름";
    row.appendChild(name);

    let composer = document.createElement('th');
    composer.innerHTML = "작곡가";
    row.appendChild(composer);

    let BPM = document.createElement('th');
    BPM.innerHTML = "BPM";
    row.appendChild(BPM);
    
    let BSC;
    if (!document.getElementById('key8').checked) {
        BSC = document.createElement('th');
        BSC.innerHTML = "BSC";
        row.appendChild(BSC);
    }
    
    let EZ = document.createElement('th');
    EZ.innerHTML = "EZ";
    row.appendChild(EZ);
    
    let NM = document.createElement('th');
    NM.innerHTML = "NM";
    row.appendChild(NM);
    
    let HD = document.createElement('th');
    HD.innerHTML = "HD";
    row.appendChild(HD);
    
    let SHD = document.createElement('th');
    SHD.innerHTML = "SHD";
    row.appendChild(SHD);

    thead.appendChild(row);

    // 데이터 채우기
    for (const iterator of arr) {
        row = document.createElement('tr');

        version = document.createElement('td');
        version.innerHTML = `${iterator.version}`;
        row.appendChild(version);

        name = document.createElement('td');
        name.innerHTML = `${iterator.name}`;
        name.className = 'songname';
        row.appendChild(name);

        composer = document.createElement('td');
        composer.innerHTML = `${iterator.composer}`;
        composer.className = 'composer';
        row.appendChild(composer);

        BPM = document.createElement('td');
        BPM.innerHTML = (iterator.maxBPM === null) ? `${iterator.minBPM}` : `${iterator.minBPM} ~ ${iterator.maxBPM}`;
        row.appendChild(BPM);

        if (!document.getElementById('key8').checked) {
            BSC = document.createElement('td');
            BSC.className = 'difficulty';
        }

        EZ = document.createElement('td');
        EZ.className = 'difficulty';

        NM = document.createElement('td');
        NM.className = 'difficulty';

        HD = document.createElement('td');
        HD.className = 'difficulty';

        SHD = document.createElement('td');
        SHD.className = 'difficulty';

        if (document.getElementById('key4').checked) {
            BSC.innerHTML = (iterator.BSC4 === level) ? `${iterator.BSC4}` : ' ';
            EZ.innerHTML = (iterator.EZ4 === level) ? `${iterator.EZ4}` : ' ';
            NM.innerHTML = (iterator.NM4 === level) ? `${iterator.NM4}` : ' ';
            HD.innerHTML = (iterator.HD4 === level) ? `${iterator.HD4}` : ' ';
            SHD.innerHTML = (iterator.SHD4 === level) ? `${iterator.SHD4}` : ' ';
        } else if (document.getElementById('key5').checked) {
            BSC.innerHTML = (iterator.BSC5 === level) ? `${iterator.BSC5}` : ' ';
            EZ.innerHTML = (iterator.EZ5 === level) ? `${iterator.EZ5}` : ' ';
            NM.innerHTML = (iterator.NM5 === level) ? `${iterator.NM5}` : ' ';
            HD.innerHTML = (iterator.HD5 === level) ? `${iterator.HD5}` : ' ';
            SHD.innerHTML = (iterator.SHD5 === level) ? `${iterator.SHD5}` : ' ';
        } else if (document.getElementById('key6').checked) {
            BSC.innerHTML = (iterator.BSC6 === level) ? `${iterator.BSC6}` : ' ';
            EZ.innerHTML = (iterator.EZ6 === level) ? `${iterator.EZ6}` : ' ';
            NM.innerHTML = (iterator.NM6 === level) ? `${iterator.NM6}` : ' ';
            HD.innerHTML = (iterator.HD6 === level) ? `${iterator.HD6}` : ' ';
            SHD.innerHTML = (iterator.SHD6 === level) ? `${iterator.SHD6}` : ' ';
        } else if (document.getElementById('key8').checked) {
            EZ.innerHTML = (iterator.EZ8 === level) ? `${iterator.EZ8}` : ' ';
            NM.innerHTML = (iterator.NM8 === level) ? `${iterator.NM8}` : ' ';
            HD.innerHTML = (iterator.HD8 === level) ? `${iterator.HD8}` : ' ';
            SHD.innerHTML = (iterator.SHD8 === level) ? `${iterator.SHD8}` : ' ';
        }

        if (!document.getElementById('key8').checked) {
            row.appendChild(BSC);
        }
        row.appendChild(EZ);
        row.appendChild(NM);
        row.appendChild(HD);
        row.appendChild(SHD);

        tbody.appendChild(row);
    }
}
