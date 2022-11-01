// 이미 만들어진 테이블을 삭제
function removeTable() {
    document.getElementById('section').innerText = '';

    let dataArea = document.getElementById('data');
    if (dataArea) {
        dataArea.remove();
    }    
}

// 곡 이름 앞에 The를 제거
function removeThe(str) {
    const indexOfSpace = str.indexOf(' ');
  
    if (indexOfSpace === -1) {
        return '';
    }
  
    return str.substring(indexOfSpace + 1);
}

// 이름으로 검색
function showName(paramName) {
    removeTable();

    let arr = [];
    const alphabet = /[a-zA-Z]/;
    for (const iterator of data) {
        // 첫 글자가 The인 경우
        const isItTHE = iterator.name.slice(0, 3);
        if (isItTHE == 'The') {
            const songName = removeThe(iterator.name);
            if (paramName == '#') {
                if (!alphabet.test(songName.charAt(0))) {
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
                if (!alphabet.test(iterator.name.charAt(1))) {
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
                if (!alphabet.test(iterator.name.charAt(0))) {
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
    if (document.getElementById('key4').checked
    || document.getElementById('key5').checked
    || document.getElementById('key6').checked) {
        BSC = document.createElement('th');
        BSC.innerHTML = "BSC";
        row.appendChild(BSC);
    }
    
    let col1 = document.createElement('th');
    let col2 = document.createElement('th');
    let col3 = document.createElement('th');
    let col4 = document.createElement('th');

    if (document.getElementById('key4').checked
    || document.getElementById('key5').checked
    || document.getElementById('key6').checked
    || document.getElementById('key8').checked) {
        col1.innerHTML = "EZ";
        col2.innerHTML = "NM";
        col3.innerHTML = "HD";
        col4.innerHTML = "SHD";
    } else if (document.getElementById('easy').checked
    || document.getElementById('normal').checked
    || document.getElementById('hard').checked
    || document.getElementById('superhard').checked) {
        col1.innerHTML = "4K";
        col2.innerHTML = "5K";
        col3.innerHTML = "6K";
        col4.innerHTML = "8K";
    }

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

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

        if (document.getElementById('key4').checked
        || document.getElementById('key5').checked
        || document.getElementById('key6').checked) {
                BSC = document.createElement('td');
            BSC.className = 'difficulty';
        }

        col1 = document.createElement('td');
        col1.className = 'difficulty';

        col2 = document.createElement('td');
        col2.className = 'difficulty';

        col3 = document.createElement('td');
        col3.className = 'difficulty';

        col4 = document.createElement('td');
        col4.className = 'difficulty';

        if (document.getElementById('key4').checked) {
            BSC.innerHTML = (iterator.BSC4 === null) ? ' ' : `${iterator.BSC4}`;
            col1.innerHTML = (iterator.EZ4 === null) ? ' ' : `${iterator.EZ4}`;
            col2.innerHTML = (iterator.NM4 === null) ? ' ' : `${iterator.NM4}`;
            col3.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            col4.innerHTML = (iterator.SHD4 === null) ? ' ' : `${iterator.SHD4}`;
        } else if (document.getElementById('key5').checked) {
            BSC.innerHTML = (iterator.BSC5 === null) ? ' ' : `${iterator.BSC5}`;
            col1.innerHTML = (iterator.EZ5 === null) ? ' ' : `${iterator.EZ5}`;
            col2.innerHTML = (iterator.NM5 === null) ? ' ' : `${iterator.NM5}`;
            col3.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            col4.innerHTML = (iterator.SHD5 === null) ? ' ' : `${iterator.SHD5}`;
        } else if (document.getElementById('key6').checked) {
            BSC.innerHTML = (iterator.BSC6 === null) ? ' ' : `${iterator.BSC6}`;
            col1.innerHTML = (iterator.EZ6 === null) ? ' ' : `${iterator.EZ6}`;
            col2.innerHTML = (iterator.NM6 === null) ? ' ' : `${iterator.NM6}`;
            col3.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            col4.innerHTML = (iterator.SHD6 === null) ? ' ' : `${iterator.SHD6}`;
        } else if (document.getElementById('key8').checked) {
            col1.innerHTML = (iterator.EZ8 === null) ? ' ' : `${iterator.EZ8}`;
            col2.innerHTML = (iterator.NM8 === null) ? ' ' : `${iterator.NM8}`;
            col3.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
            col4.innerHTML = (iterator.SHD8 === null) ? ' ' : `${iterator.SHD8}`;
        } else if (document.getElementById('easy').checked) {
            col1.innerHTML = (iterator.EZ4 === null) ? ' ' : `${iterator.EZ4}`;
            col2.innerHTML = (iterator.EZ5 === null) ? ' ' : `${iterator.EZ5}`;
            col3.innerHTML = (iterator.EZ6 === null) ? ' ' : `${iterator.EZ6}`;
            col4.innerHTML = (iterator.EZ8 === null) ? ' ' : `${iterator.EZ8}`;
        } else if (document.getElementById('normal').checked) {
            col1.innerHTML = (iterator.NM4 === null) ? ' ' : `${iterator.NM4}`;
            col2.innerHTML = (iterator.NM5 === null) ? ' ' : `${iterator.NM5}`;
            col3.innerHTML = (iterator.NM6 === null) ? ' ' : `${iterator.NM6}`;
            col4.innerHTML = (iterator.NM8 === null) ? ' ' : `${iterator.NM8}`;
        } else if (document.getElementById('hard').checked) {
            col1.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            col2.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            col3.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            col4.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
        } else if (document.getElementById('superhard').checked) {
            col1.innerHTML = (iterator.SHD4 === null) ? ' ' : `${iterator.SHD4}`;
            col2.innerHTML = (iterator.SHD5 === null) ? ' ' : `${iterator.SHD5}`;
            col3.innerHTML = (iterator.SHD6 === null) ? ' ' : `${iterator.SHD6}`;
            col4.innerHTML = (iterator.SHD8 === null) ? ' ' : `${iterator.SHD8}`;
        }

        if (document.getElementById('key4').checked
        || document.getElementById('key5').checked
        || document.getElementById('key6').checked) {
                row.appendChild(BSC);
        }
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);

        tbody.appendChild(row);
    }
}

// 버전으로 검색
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
    if (document.getElementById('key4').checked
    || document.getElementById('key5').checked
    || document.getElementById('key6').checked) {
        BSC = document.createElement('th');
        BSC.innerHTML = "BSC";
        row.appendChild(BSC);
    }
    
    let col1 = document.createElement('th');
    let col2 = document.createElement('th');
    let col3 = document.createElement('th');
    let col4 = document.createElement('th');

    if (document.getElementById('key4').checked
    || document.getElementById('key5').checked
    || document.getElementById('key6').checked
    || document.getElementById('key8').checked) {
        col1.innerHTML = "EZ";
        col2.innerHTML = "NM";
        col3.innerHTML = "HD";
        col4.innerHTML = "SHD";
    } else if (document.getElementById('easy').checked
    || document.getElementById('normal').checked
    || document.getElementById('hard').checked
    || document.getElementById('superhard').checked) {
        col1.innerHTML = "4K";
        col2.innerHTML = "5K";
        col3.innerHTML = "6K";
        col4.innerHTML = "8K";
    }

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

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

        if (document.getElementById('key4').checked
        || document.getElementById('key5').checked
        || document.getElementById('key6').checked) {
                BSC = document.createElement('td');
            BSC.className = 'difficulty';
        }

        col1 = document.createElement('td');
        col1.className = 'difficulty';

        col2 = document.createElement('td');
        col2.className = 'difficulty';

        col3 = document.createElement('td');
        col3.className = 'difficulty';

        col4 = document.createElement('td');
        col4.className = 'difficulty';

        if (document.getElementById('key4').checked) {
            BSC.innerHTML = (iterator.BSC4 === null) ? ' ' : `${iterator.BSC4}`;
            col1.innerHTML = (iterator.EZ4 === null) ? ' ' : `${iterator.EZ4}`;
            col2.innerHTML = (iterator.NM4 === null) ? ' ' : `${iterator.NM4}`;
            col3.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            col4.innerHTML = (iterator.SHD4 === null) ? ' ' : `${iterator.SHD4}`;
        } else if (document.getElementById('key5').checked) {
            BSC.innerHTML = (iterator.BSC5 === null) ? ' ' : `${iterator.BSC5}`;
            col1.innerHTML = (iterator.EZ5 === null) ? ' ' : `${iterator.EZ5}`;
            col2.innerHTML = (iterator.NM5 === null) ? ' ' : `${iterator.NM5}`;
            col3.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            col4.innerHTML = (iterator.SHD5 === null) ? ' ' : `${iterator.SHD5}`;
        } else if (document.getElementById('key6').checked) {
            BSC.innerHTML = (iterator.BSC6 === null) ? ' ' : `${iterator.BSC6}`;
            col1.innerHTML = (iterator.EZ6 === null) ? ' ' : `${iterator.EZ6}`;
            col2.innerHTML = (iterator.NM6 === null) ? ' ' : `${iterator.NM6}`;
            col3.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            col4.innerHTML = (iterator.SHD6 === null) ? ' ' : `${iterator.SHD6}`;
        } else if (document.getElementById('key8').checked) {
            col1.innerHTML = (iterator.EZ8 === null) ? ' ' : `${iterator.EZ8}`;
            col2.innerHTML = (iterator.NM8 === null) ? ' ' : `${iterator.NM8}`;
            col3.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
            col4.innerHTML = (iterator.SHD8 === null) ? ' ' : `${iterator.SHD8}`;
        } else if (document.getElementById('easy').checked) {
            col1.innerHTML = (iterator.EZ4 === null) ? ' ' : `${iterator.EZ4}`;
            col2.innerHTML = (iterator.EZ5 === null) ? ' ' : `${iterator.EZ5}`;
            col3.innerHTML = (iterator.EZ6 === null) ? ' ' : `${iterator.EZ6}`;
            col4.innerHTML = (iterator.EZ8 === null) ? ' ' : `${iterator.EZ8}`;
        } else if (document.getElementById('normal').checked) {
            col1.innerHTML = (iterator.NM4 === null) ? ' ' : `${iterator.NM4}`;
            col2.innerHTML = (iterator.NM5 === null) ? ' ' : `${iterator.NM5}`;
            col3.innerHTML = (iterator.NM6 === null) ? ' ' : `${iterator.NM6}`;
            col4.innerHTML = (iterator.NM8 === null) ? ' ' : `${iterator.NM8}`;
        } else if (document.getElementById('hard').checked) {
            col1.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            col2.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            col3.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            col4.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
        } else if (document.getElementById('superhard').checked) {
            col1.innerHTML = (iterator.SHD4 === null) ? ' ' : `${iterator.SHD4}`;
            col2.innerHTML = (iterator.SHD5 === null) ? ' ' : `${iterator.SHD5}`;
            col3.innerHTML = (iterator.SHD6 === null) ? ' ' : `${iterator.SHD6}`;
            col4.innerHTML = (iterator.SHD8 === null) ? ' ' : `${iterator.SHD8}`;
        }

        if (document.getElementById('key4').checked
        || document.getElementById('key5').checked
        || document.getElementById('key6').checked) {
                row.appendChild(BSC);
        }
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);

        tbody.appendChild(row);
    }
}

// 난이도로 검색
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
    if (document.getElementById('key4').checked
    || document.getElementById('key5').checked
    || document.getElementById('key6').checked
    || document.getElementById('key8').checked) {
        document.getElementById('section').innerText = `레벨: ${level} [${arr.length}]`;
    } else if (document.getElementById('easy').checked
    || document.getElementById('normal').checked
    || document.getElementById('hard').checked
    || document.getElementById('superhard').checked) {
        document.getElementById('section').innerText = `레벨별 검색에서는 버튼별 보기를 눌러주세요.`;
        return;
    }

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
    if (document.getElementById('key4').checked
    || document.getElementById('key5').checked
    || document.getElementById('key6').checked) {
        BSC = document.createElement('th');
        BSC.innerHTML = "BSC";
        row.appendChild(BSC);
    }
    
    let col1 = document.createElement('th');
    col1.innerHTML = "EZ";
    row.appendChild(col1);
    
    let col2 = document.createElement('th');
    col2.innerHTML = "NM";
    row.appendChild(col2);
    
    let col3 = document.createElement('th');
    col3.innerHTML = "HD";
    row.appendChild(col3);
    
    let col4 = document.createElement('th');
    col4.innerHTML = "SHD";
    row.appendChild(col4);

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

        if (document.getElementById('key4').checked
        || document.getElementById('key5').checked
        || document.getElementById('key6').checked) {
            BSC = document.createElement('td');
            BSC.className = 'difficulty';
        }

        col1 = document.createElement('td');
        col1.className = 'difficulty';

        col2 = document.createElement('td');
        col2.className = 'difficulty';

        col3 = document.createElement('td');
        col3.className = 'difficulty';

        col4 = document.createElement('td');
        col4.className = 'difficulty';

        if (document.getElementById('key4').checked) {
            BSC.innerHTML = (iterator.BSC4 === level) ? `${iterator.BSC4}` : ' ';
            col1.innerHTML = (iterator.EZ4 === level) ? `${iterator.EZ4}` : ' ';
            col2.innerHTML = (iterator.NM4 === level) ? `${iterator.NM4}` : ' ';
            col3.innerHTML = (iterator.HD4 === level) ? `${iterator.HD4}` : ' ';
            col4.innerHTML = (iterator.SHD4 === level) ? `${iterator.SHD4}` : ' ';
        } else if (document.getElementById('key5').checked) {
            BSC.innerHTML = (iterator.BSC5 === level) ? `${iterator.BSC5}` : ' ';
            col1.innerHTML = (iterator.EZ5 === level) ? `${iterator.EZ5}` : ' ';
            col2.innerHTML = (iterator.NM5 === level) ? `${iterator.NM5}` : ' ';
            col3.innerHTML = (iterator.HD5 === level) ? `${iterator.HD5}` : ' ';
            col4.innerHTML = (iterator.SHD5 === level) ? `${iterator.SHD5}` : ' ';
        } else if (document.getElementById('key6').checked) {
            BSC.innerHTML = (iterator.BSC6 === level) ? `${iterator.BSC6}` : ' ';
            col1.innerHTML = (iterator.EZ6 === level) ? `${iterator.EZ6}` : ' ';
            col2.innerHTML = (iterator.NM6 === level) ? `${iterator.NM6}` : ' ';
            col3.innerHTML = (iterator.HD6 === level) ? `${iterator.HD6}` : ' ';
            col4.innerHTML = (iterator.SHD6 === level) ? `${iterator.SHD6}` : ' ';
        } else if (document.getElementById('key8').checked) {
            col1.innerHTML = (iterator.EZ8 === level) ? `${iterator.EZ8}` : ' ';
            col2.innerHTML = (iterator.NM8 === level) ? `${iterator.NM8}` : ' ';
            col3.innerHTML = (iterator.HD8 === level) ? `${iterator.HD8}` : ' ';
            col4.innerHTML = (iterator.SHD8 === level) ? `${iterator.SHD8}` : ' ';
        }

        if (document.getElementById('key4').checked
        || document.getElementById('key5').checked
        || document.getElementById('key6').checked) {
            row.appendChild(BSC);
        }
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);

        tbody.appendChild(row);
    }
}
