// 이미 만들어진 테이블을 삭제
function removeTable() {
    document.getElementById('section').innerText = '';

    let dataArea = document.getElementById('data');
    if (dataArea) {
        dataArea.remove();
    }    
}

// 함수 목록
function showName(paramName) {
    removeTable();

    let arr = [];
    const alphabet = /[a-zA-Z]/;
    for (const iterator of data) {
        if (paramName == '#') {
            if (!alphabet.test(iterator.name.charAt(0))) {
                arr.push(iterator);
            }
        } else {
            if (iterator.name.charAt(0) == paramName ||
                iterator.name.charAt(0) == paramName.toLowerCase()) {
                arr.push(iterator);
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

    let version = document.createElement('th');
    version.innerHTML = "뮤직 팩";
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
    
    let NM = document.createElement('th');
    NM.innerHTML = "NM";
    row.appendChild(NM);
    
    let HD = document.createElement('th');
    HD.innerHTML = "HD";
    row.appendChild(HD);
    
    let MX = document.createElement('th');
    MX.innerHTML = "MX";
    row.appendChild(MX);
    
    let SC = document.createElement('th');
    SC.innerHTML = "SC";
    row.appendChild(SC);

    thead.appendChild(row);

    // 데이터 채우기
    for (const iterator of arr) {
        row = document.createElement('tr');

        version = document.createElement('td');
        version.innerHTML = `${iterator.version}`;
        row.appendChild(version);

        name = document.createElement('td');
        name.innerHTML = `${iterator.name}`;
        row.appendChild(name);

        composer = document.createElement('td');
        composer.innerHTML = `${iterator.composer}`;
        row.appendChild(composer);

        BPM = document.createElement('td');
        BPM.innerHTML = (iterator.maxBPM === null) ? `${iterator.minBPM}` : `${iterator.minBPM} ~ ${iterator.maxBPM}`;
        row.appendChild(BPM);

        NM = document.createElement('td');
        NM.className = 'difficulty';

        HD = document.createElement('td');
        HD.className = 'difficulty';

        MX = document.createElement('td');
        MX.className = 'difficulty';

        SC = document.createElement('td');
        SC.className = 'difficulty';

        if (document.getElementById('button4').checked) {
            NM.innerHTML = `${iterator.NM4}`;
            HD.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            MX.innerHTML = (iterator.MX4 === null) ? ' ' : `${iterator.MX4}`;
            SC.innerHTML = (iterator.SC4 === null) ? ' ' : `${iterator.SC4}`;
        } else if (document.getElementById('button5').checked) {
            NM.innerHTML = `${iterator.NM5}`;
            HD.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            MX.innerHTML = (iterator.MX5 === null) ? ' ' : `${iterator.MX5}`;
            SC.innerHTML = (iterator.SC5 === null) ? ' ' : `${iterator.SC5}`;
        } else if (document.getElementById('button6').checked) {
            NM.innerHTML = `${iterator.NM6}`;
            HD.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            MX.innerHTML = (iterator.MX6 === null) ? ' ' : `${iterator.MX6}`;
            SC.innerHTML = (iterator.SC6 === null) ? ' ' : `${iterator.SC6}`;
        } else if (document.getElementById('button8').checked) {
            NM.innerHTML = `${iterator.NM8}`;
            HD.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
            MX.innerHTML = (iterator.MX8 === null) ? ' ' : `${iterator.MX8}`;
            SC.innerHTML = (iterator.SC8 === null) ? ' ' : `${iterator.SC8}`;
        }

        row.appendChild(NM);
        row.appendChild(HD);
        row.appendChild(MX);
        row.appendChild(SC);

        tbody.appendChild(row);
    }
}

function showVersion(paramVersion) {
    removeTable();

    // json에서 필터한 내용을 담을 배열
    let arr = [];
    // 올 트랙일 경우 데이터를 그대로 쓴다
    if (paramVersion == 'ALL TRACK') {
        arr = data;
    } else {
        for (const iterator of data) {
            if (paramVersion == 'COLLABORATION') {  // 콜라보레이션 음악을 전부 넣는다
                if (iterator.version == 'GUILTY GEAR' ||
                    iterator.version == 'CHUNITHM' ||
                    iterator.version == 'CYTUS' ||
                    iterator.version == 'DEEMO' ||
                    iterator.version == 'ESTIMATE' ||
                    iterator.version == 'GROOVE COASTER' ||
                    iterator.version == `GIRLS' FRONTLINE` ||
                    iterator.version == 'MUSE DASH' ||
                    iterator.version == 'NEXON') {
                    arr.push(iterator);
                }
            } else if (iterator.version == paramVersion) {  // 뮤직 팩별 필터
                arr.push(iterator);
            }
        }
    }

    // 제목 설정
    document.getElementById('section').innerText = `뮤직 팩: ${paramVersion} [${arr.length}]`;

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
    
    let NM = document.createElement('th');
    NM.innerHTML = "NM";
    row.appendChild(NM);
    
    let HD = document.createElement('th');
    HD.innerHTML = "HD";
    row.appendChild(HD);
    
    let MX = document.createElement('th');
    MX.innerHTML = "MX";
    row.appendChild(MX);
    
    let SC = document.createElement('th');
    SC.innerHTML = "SC";
    row.appendChild(SC);

    thead.appendChild(row);

    // 데이터 채우기
    for (const iterator of arr) {
        row = document.createElement('tr');

        name = document.createElement('td');
        name.innerHTML = `${iterator.name}`;
        row.appendChild(name);

        composer = document.createElement('td');
        composer.innerHTML = `${iterator.composer}`;
        row.appendChild(composer);

        BPM = document.createElement('td');
        BPM.innerHTML = (iterator.maxBPM === null) ? `${iterator.minBPM}` : `${iterator.minBPM} ~ ${iterator.maxBPM}`;
        row.appendChild(BPM);

        NM = document.createElement('td');
        NM.className = 'difficulty';

        HD = document.createElement('td');
        HD.className = 'difficulty';

        MX = document.createElement('td');
        MX.className = 'difficulty';

        SC = document.createElement('td');
        SC.className = 'difficulty';

        if (document.getElementById('button4').checked) {
            NM.innerHTML = `${iterator.NM4}`;
            HD.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            MX.innerHTML = (iterator.MX4 === null) ? ' ' : `${iterator.MX4}`;
            SC.innerHTML = (iterator.SC4 === null) ? ' ' : `${iterator.SC4}`;
        } else if (document.getElementById('button5').checked) {
            NM.innerHTML = `${iterator.NM5}`;
            HD.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            MX.innerHTML = (iterator.MX5 === null) ? ' ' : `${iterator.MX5}`;
            SC.innerHTML = (iterator.SC5 === null) ? ' ' : `${iterator.SC5}`;
        } else if (document.getElementById('button6').checked) {
            NM.innerHTML = `${iterator.NM6}`;
            HD.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            MX.innerHTML = (iterator.MX6 === null) ? ' ' : `${iterator.MX6}`;
            SC.innerHTML = (iterator.SC6 === null) ? ' ' : `${iterator.SC6}`;
        } else if (document.getElementById('button8').checked) {
            NM.innerHTML = `${iterator.NM8}`;
            HD.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
            MX.innerHTML = (iterator.MX8 === null) ? ' ' : `${iterator.MX8}`;
            SC.innerHTML = (iterator.SC8 === null) ? ' ' : `${iterator.SC8}`;
        }

        row.appendChild(NM);
        row.appendChild(HD);
        row.appendChild(MX);
        row.appendChild(SC);

        tbody.appendChild(row);
    }
}

function showLevel(level) {
    removeTable();

    // json에서 필터
    let arr = [];
    for (const iterator of data) {
        if (document.getElementById('button4').checked) {
            if (iterator.NM4 == level ||
                iterator.HD4 == level ||
                iterator.MX4 == level) {
                arr.push(iterator);
            }
        } else if (document.getElementById('button5').checked) {
            if (iterator.NM5 == level ||
                iterator.HD5 == level ||
                iterator.MX5 == level) {
                arr.push(iterator);
            }
        } else if (document.getElementById('button6').checked) {
            if (iterator.NM6 == level ||
                iterator.HD6 == level ||
                iterator.MX6 == level) {
                arr.push(iterator);
            }
        } else if (document.getElementById('button8').checked) {
            if (iterator.NM8 == level ||
                iterator.HD8 == level ||
                iterator.MX8 == level) {
                arr.push(iterator);
            }
        }
    }

    // 제목 설정
    document.getElementById('section').innerText = `정규 난이도: ${level} [${arr.length}]`;

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
    version.innerHTML = "뮤직 팩";
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
    
    let NM = document.createElement('th');
    NM.innerHTML = "NM";
    row.appendChild(NM);
    
    let HD = document.createElement('th');
    HD.innerHTML = "HD";
    row.appendChild(HD);
    
    let MX = document.createElement('th');
    MX.innerHTML = "MX";
    row.appendChild(MX);

    thead.appendChild(row);

    // 데이터 채우기
    for (const iterator of arr) {
        row = document.createElement('tr');

        version = document.createElement('td');
        version.innerHTML = `${iterator.version}`;
        row.appendChild(version);

        name = document.createElement('td');
        name.innerHTML = `${iterator.name}`;
        row.appendChild(name);

        composer = document.createElement('td');
        composer.innerHTML = `${iterator.composer}`;
        row.appendChild(composer);

        BPM = document.createElement('td');
        BPM.innerHTML = (iterator.maxBPM === null) ? `${iterator.minBPM}` : `${iterator.minBPM} ~ ${iterator.maxBPM}`;
        row.appendChild(BPM);

        NM = document.createElement('td');
        NM.className = 'difficulty';

        HD = document.createElement('td');
        HD.className = 'difficulty';

        MX = document.createElement('td');
        MX.className = 'difficulty';

        if (document.getElementById('button4').checked) {
            NM.innerHTML = (iterator.NM4 == level) ? `${iterator.NM4}` : '';
            HD.innerHTML = (iterator.HD4 == level) ? `${iterator.HD4}` : '';
            MX.innerHTML = (iterator.MX4 == level) ? `${iterator.MX4}` : '';
        } else if (document.getElementById('button5').checked) {
            NM.innerHTML = (iterator.NM5 == level) ? `${iterator.NM5}` : '';
            HD.innerHTML = (iterator.HD5 == level) ? `${iterator.HD5}` : '';
            MX.innerHTML = (iterator.MX5 == level) ? `${iterator.MX5}` : '';
        } else if (document.getElementById('button6').checked) {
            NM.innerHTML = (iterator.NM6 == level) ? `${iterator.NM6}` : '';
            HD.innerHTML = (iterator.HD6 == level) ? `${iterator.HD6}` : '';
            MX.innerHTML = (iterator.MX6 == level) ? `${iterator.MX6}` : '';
        } else if (document.getElementById('button8').checked) {
            NM.innerHTML = (iterator.NM8 == level) ? `${iterator.NM8}` : '';
            HD.innerHTML = (iterator.HD8 == level) ? `${iterator.HD8}` : '';
            MX.innerHTML = (iterator.MX8 == level) ? `${iterator.MX8}` : '';
        }

        row.appendChild(NM);
        row.appendChild(HD);
        row.appendChild(MX);

        tbody.appendChild(row);
    }
}

function showSCLevel(level) {
    removeTable();

    // json에서 필터
    let arr = [];
    for (const iterator of data) {
        if (document.getElementById('button4').checked) {
            if (iterator.SC4 == level) {
                arr.push(iterator);
            }
        } else if (document.getElementById('button5').checked) {
            if (iterator.SC5 == level) {
                arr.push(iterator);
            }
        } else if (document.getElementById('button6').checked) {
            if (iterator.SC6 == level) {
                arr.push(iterator);
            }
        } else if (document.getElementById('button8').checked) {
            if (iterator.SC8 == level) {
                arr.push(iterator);
            }
        }
    }

    // 제목 설정
    document.getElementById('section').innerText = `SC 난이도: ${level} [${arr.length}]`;

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
    version.innerHTML = "뮤직 팩";
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
    
    let SC = document.createElement('th');
    SC.innerHTML = "SC";
    row.appendChild(SC);

    thead.appendChild(row);

    // 데이터 채우기
    for (const iterator of arr) {
        row = document.createElement('tr');

        version = document.createElement('td');
        version.innerHTML = `${iterator.version}`;
        row.appendChild(version);

        name = document.createElement('td');
        name.innerHTML = `${iterator.name}`;
        row.appendChild(name);

        composer = document.createElement('td');
        composer.innerHTML = `${iterator.composer}`;
        row.appendChild(composer);

        BPM = document.createElement('td');
        BPM.innerHTML = (iterator.maxBPM === null) ? `${iterator.minBPM}` : `${iterator.minBPM} ~ ${iterator.maxBPM}`;
        row.appendChild(BPM);

        SC = document.createElement('td');
        SC.className = 'difficulty';

        if (document.getElementById('button4').checked) {
            SC.innerHTML = (iterator.SC4 == level) ? `${iterator.SC4}` : '';
        } else if (document.getElementById('button5').checked) {
            SC.innerHTML = (iterator.SC5 == level) ? `${iterator.SC5}` : '';
        } else if (document.getElementById('button6').checked) {
            SC.innerHTML = (iterator.SC6 == level) ? `${iterator.SC6}` : '';
        } else if (document.getElementById('button8').checked) {
            SC.innerHTML = (iterator.SC8 == level) ? `${iterator.SC8}` : '';
        }
        row.appendChild(SC);

        tbody.appendChild(row);
    }
}
