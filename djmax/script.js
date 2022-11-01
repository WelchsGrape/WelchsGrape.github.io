// 이미 만들어진 테이블을 삭제
function removeTable() {
    document.getElementById('section').innerText = '';

    let dataArea = document.getElementById('data');
    if (dataArea) {
        dataArea.remove();
    }    
}

// 원 시리즈 이름을 반환
function getVersionFullName(version) {
    switch (version) {
        case 'ALL':
            return 'ALL TRACK';
        case 'RS':
            return 'RESPECT';
        case 'VE':
            return 'V EXTENSION 1';
        case 'VE2':
            return 'V EXTENSION 2';
        case 'P1':
            return 'PORTABLE 1';
        case 'P2':
            return 'PORTABLE 2';
        case 'P3':
            return 'PORTABLE 3';
        case 'TR':
            return 'TRILOGY';
        case 'CE':
            return 'CLAZZIQUAI';
        case 'BS':
            return 'BLACK SQUARE';
        case 'T1':
            return 'TECHNIKA 1';
        case 'T2':
            return 'TECHNIKA 2';
        case 'T3':
            return 'TECHNIKA 3';
        case 'TQ':
            return 'TECHNIKA T&Q';
        case 'ES':
            return 'EMOTIONAL SENSE';
        case 'GG':
            return 'GUILTY GEAR';
        case 'CHU':
            return 'CHUNITHM';
        case 'CY':
            return 'CYTUS';
        case 'DM':
            return 'DEEMO';
        case 'ESTI':
            return 'ESTIMATE';
        case 'GC':
            return 'GROOVE COASTER';
        case 'GF':
            return `GIRLS' FRONTLINE`;
        case 'MD':
            return 'MUSE DASH';
        case 'NXN':
            return 'NEXON';
    }
}

// 이름으로 검색
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
            if (iterator.name.charAt(0) == paramName
            || iterator.name.charAt(0) == paramName.toLowerCase()) {
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
    
    let col1 = document.createElement('th');
    let col2 = document.createElement('th');
    let col3 = document.createElement('th');
    let col4 = document.createElement('th');

    if (document.getElementById('button4').checked
    || document.getElementById('button5').checked
    || document.getElementById('button6').checked
    || document.getElementById('button8').checked) {
        col1.innerHTML = "NM";
        col2.innerHTML = "HD";
        col3.innerHTML = "MX";
        col4.innerHTML = "SC";
    } else if (document.getElementById('normal').checked
    || document.getElementById('hard').checked
    || document.getElementById('maximum').checked
    || document.getElementById('special').checked) {
        col1.innerHTML = "4B";
        col2.innerHTML = "5B";
        col3.innerHTML = "6B";
        col4.innerHTML = "8B";
    }

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

    thead.appendChild(row);

    // 데이터 채우기
    for (const iterator of arr) {
        row = document.createElement('tr');

        // 버전 출력
        version = document.createElement('td');
        version.innerHTML = getVersionFullName(iterator.version);
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

        col1 = document.createElement('td');
        col1.className = 'difficulty';

        col2 = document.createElement('td');
        col2.className = 'difficulty';

        col3 = document.createElement('td');
        col3.className = 'difficulty';

        col4 = document.createElement('td');
        col4.className = 'difficulty';

        if (document.getElementById('button4').checked) {
            col1.innerHTML = `${iterator.NM4}`;
            col2.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            col3.innerHTML = (iterator.MX4 === null) ? ' ' : `${iterator.MX4}`;
            col4.innerHTML = (iterator.SC4 === null) ? ' ' : `${iterator.SC4}`;
        } else if (document.getElementById('button5').checked) {
            col1.innerHTML = `${iterator.NM5}`;
            col2.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            col3.innerHTML = (iterator.MX5 === null) ? ' ' : `${iterator.MX5}`;
            col4.innerHTML = (iterator.SC5 === null) ? ' ' : `${iterator.SC5}`;
        } else if (document.getElementById('button6').checked) {
            col1.innerHTML = `${iterator.NM6}`;
            col2.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            col3.innerHTML = (iterator.MX6 === null) ? ' ' : `${iterator.MX6}`;
            col4.innerHTML = (iterator.SC6 === null) ? ' ' : `${iterator.SC6}`;
        } else if (document.getElementById('button8').checked) {
            col1.innerHTML = `${iterator.NM8}`;
            col2.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
            col3.innerHTML = (iterator.MX8 === null) ? ' ' : `${iterator.MX8}`;
            col4.innerHTML = (iterator.SC8 === null) ? ' ' : `${iterator.SC8}`;
        } else if (document.getElementById('normal').checked) {
            col1.innerHTML = `${iterator.NM4}`;
            col2.innerHTML = `${iterator.NM5}`;
            col3.innerHTML = `${iterator.NM6}`;
            col4.innerHTML = `${iterator.NM8}`;
        } else if (document.getElementById('hard').checked) {
            col1.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            col2.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            col3.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            col4.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
        } else if (document.getElementById('maximum').checked) {
            col1.innerHTML = (iterator.MX4 === null) ? ' ' : `${iterator.MX4}`;
            col2.innerHTML = (iterator.MX5 === null) ? ' ' : `${iterator.MX5}`;
            col3.innerHTML = (iterator.MX6 === null) ? ' ' : `${iterator.MX6}`;
            col4.innerHTML = (iterator.MX8 === null) ? ' ' : `${iterator.MX8}`;
        } else if (document.getElementById('special').checked) {
            col1.innerHTML = (iterator.SC4 === null) ? ' ' : `${iterator.SC4}`;
            col2.innerHTML = (iterator.SC5 === null) ? ' ' : `${iterator.SC5}`;
            col3.innerHTML = (iterator.SC6 === null) ? ' ' : `${iterator.SC6}`;
            col4.innerHTML = (iterator.SC8 === null) ? ' ' : `${iterator.SC8}`;
        }

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);

        tbody.appendChild(row);
    }
}

// 버전으로 검색
function showVersion(paramVersion) {
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
    document.getElementById('section').innerText = `뮤직 팩: ${getVersionFullName(paramVersion)} [${arr.length}]`;

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
    
    let col1 = document.createElement('th');
    let col2 = document.createElement('th');
    let col3 = document.createElement('th');
    let col4 = document.createElement('th');

    if (document.getElementById('button4').checked
    || document.getElementById('button5').checked
    || document.getElementById('button6').checked
    || document.getElementById('button8').checked) {
        col1.innerHTML = "NM";
        col2.innerHTML = "HD";
        col3.innerHTML = "MX";
        col4.innerHTML = "SC";
    } else if (document.getElementById('normal').checked
    || document.getElementById('hard').checked
    || document.getElementById('maximum').checked
    || document.getElementById('special').checked) {
        col1.innerHTML = "4B";
        col2.innerHTML = "5B";
        col3.innerHTML = "6B";
        col4.innerHTML = "8B";
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

        col1 = document.createElement('td');
        col1.className = 'difficulty';

        col2 = document.createElement('td');
        col2.className = 'difficulty';

        col3 = document.createElement('td');
        col3.className = 'difficulty';

        col4 = document.createElement('td');
        col4.className = 'difficulty';

        if (document.getElementById('button4').checked) {
            col1.innerHTML = `${iterator.NM4}`;
            col2.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            col3.innerHTML = (iterator.MX4 === null) ? ' ' : `${iterator.MX4}`;
            col4.innerHTML = (iterator.SC4 === null) ? ' ' : `${iterator.SC4}`;
        } else if (document.getElementById('button5').checked) {
            col1.innerHTML = `${iterator.NM5}`;
            col2.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            col3.innerHTML = (iterator.MX5 === null) ? ' ' : `${iterator.MX5}`;
            col4.innerHTML = (iterator.SC5 === null) ? ' ' : `${iterator.SC5}`;
        } else if (document.getElementById('button6').checked) {
            col1.innerHTML = `${iterator.NM6}`;
            col2.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            col3.innerHTML = (iterator.MX6 === null) ? ' ' : `${iterator.MX6}`;
            col4.innerHTML = (iterator.SC6 === null) ? ' ' : `${iterator.SC6}`;
        } else if (document.getElementById('button8').checked) {
            col1.innerHTML = `${iterator.NM8}`;
            col2.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
            col3.innerHTML = (iterator.MX8 === null) ? ' ' : `${iterator.MX8}`;
            col4.innerHTML = (iterator.SC8 === null) ? ' ' : `${iterator.SC8}`;
        } else if (document.getElementById('normal').checked) {
            col1.innerHTML = `${iterator.NM4}`;
            col2.innerHTML = `${iterator.NM5}`;
            col3.innerHTML = `${iterator.NM6}`;
            col4.innerHTML = `${iterator.NM8}`;
        } else if (document.getElementById('hard').checked) {
            col1.innerHTML = (iterator.HD4 === null) ? ' ' : `${iterator.HD4}`;
            col2.innerHTML = (iterator.HD5 === null) ? ' ' : `${iterator.HD5}`;
            col3.innerHTML = (iterator.HD6 === null) ? ' ' : `${iterator.HD6}`;
            col4.innerHTML = (iterator.HD8 === null) ? ' ' : `${iterator.HD8}`;
        } else if (document.getElementById('maximum').checked) {
            col1.innerHTML = (iterator.MX4 === null) ? ' ' : `${iterator.MX4}`;
            col2.innerHTML = (iterator.MX5 === null) ? ' ' : `${iterator.MX5}`;
            col3.innerHTML = (iterator.MX6 === null) ? ' ' : `${iterator.MX6}`;
            col4.innerHTML = (iterator.MX8 === null) ? ' ' : `${iterator.MX8}`;
        } else if (document.getElementById('special').checked) {
            col1.innerHTML = (iterator.SC4 === null) ? ' ' : `${iterator.SC4}`;
            col2.innerHTML = (iterator.SC5 === null) ? ' ' : `${iterator.SC5}`;
            col3.innerHTML = (iterator.SC6 === null) ? ' ' : `${iterator.SC6}`;
            col4.innerHTML = (iterator.SC8 === null) ? ' ' : `${iterator.SC8}`;
        }

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);

        tbody.appendChild(row);
    }
}

// 난이도로 검색
function showLevel(level, isSCLevel = false) {
    removeTable();

    // json에서 필터
    let arr = [];
    if (isSCLevel) {
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
    } else {
        for (const iterator of data) {
            if (document.getElementById('button4').checked) {
                if (iterator.NM4 == level
                || iterator.HD4 == level
                || iterator.MX4 == level) {
                    arr.push(iterator);
                }
            } else if (document.getElementById('button5').checked) {
                if (iterator.NM5 == level
                || iterator.HD5 == level
                || iterator.MX5 == level) {
                    arr.push(iterator);
                }
            } else if (document.getElementById('button6').checked) {
                if (iterator.NM6 == level
                || iterator.HD6 == level
                || iterator.MX6 == level) {
                    arr.push(iterator);
                }
            } else if (document.getElementById('button8').checked) {
                if (iterator.NM8 == level
                || iterator.HD8 == level
                || iterator.MX8 == level) {
                    arr.push(iterator);
                }
            }
        }
    }

    // 제목 설정
    if (document.getElementById('button4').checked
    || document.getElementById('button5').checked
    || document.getElementById('button6').checked
    || document.getElementById('button8').checked) {
        document.getElementById('section').innerText = `${isSCLevel ? 'SC' : '정규'} 난이도: ${level} [${arr.length}]`;
    } else if (document.getElementById('normal').checked
    || document.getElementById('hard').checked
    || document.getElementById('maximum').checked
    || document.getElementById('special').checked) {
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
    
    let col1 = null;
    let col2 = null;
    let col3 = null;

    if (isSCLevel) {
        col1 = document.createElement('th');
        col1.innerHTML = "SC";
        row.appendChild(col1);
    } else {
        col1 = document.createElement('th');
        col1.innerHTML = "NM";
        row.appendChild(col1);
        
        col2 = document.createElement('th');
        col2.innerHTML = "HD";
        row.appendChild(col2);
        
        col3 = document.createElement('th');
        col3.innerHTML = "MX";
        row.appendChild(col3);
    }

    thead.appendChild(row);

    // 데이터 채우기
    for (const iterator of arr) {
        row = document.createElement('tr');

        version = document.createElement('td');
        version.innerHTML = getVersionFullName(iterator.version);
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

        if (isSCLevel) {
            col1 = document.createElement('td');
            col1.className = 'difficulty';
    
            if (document.getElementById('button4').checked) {
                col1.innerHTML = (iterator.SC4 == level) ? `${iterator.SC4}` : '';
            } else if (document.getElementById('button5').checked) {
                col1.innerHTML = (iterator.SC5 == level) ? `${iterator.SC5}` : '';
            } else if (document.getElementById('button6').checked) {
                col1.innerHTML = (iterator.SC6 == level) ? `${iterator.SC6}` : '';
            } else if (document.getElementById('button8').checked) {
                col1.innerHTML = (iterator.SC8 == level) ? `${iterator.SC8}` : '';
            }

            row.appendChild(col1);
        } else {
            col1 = document.createElement('td');
            col1.className = 'difficulty';
    
            col2 = document.createElement('td');
            col2.className = 'difficulty';
    
            col3 = document.createElement('td');
            col3.className = 'difficulty';
    
            if (document.getElementById('button4').checked) {
                col1.innerHTML = (iterator.NM4 == level) ? `${iterator.NM4}` : '';
                col2.innerHTML = (iterator.HD4 == level) ? `${iterator.HD4}` : '';
                col3.innerHTML = (iterator.MX4 == level) ? `${iterator.MX4}` : '';
            } else if (document.getElementById('button5').checked) {
                col1.innerHTML = (iterator.NM5 == level) ? `${iterator.NM5}` : '';
                col2.innerHTML = (iterator.HD5 == level) ? `${iterator.HD5}` : '';
                col3.innerHTML = (iterator.MX5 == level) ? `${iterator.MX5}` : '';
            } else if (document.getElementById('button6').checked) {
                col1.innerHTML = (iterator.NM6 == level) ? `${iterator.NM6}` : '';
                col2.innerHTML = (iterator.HD6 == level) ? `${iterator.HD6}` : '';
                col3.innerHTML = (iterator.MX6 == level) ? `${iterator.MX6}` : '';
            } else if (document.getElementById('button8').checked) {
                col1.innerHTML = (iterator.NM8 == level) ? `${iterator.NM8}` : '';
                col2.innerHTML = (iterator.HD8 == level) ? `${iterator.HD8}` : '';
                col3.innerHTML = (iterator.MX8 == level) ? `${iterator.MX8}` : '';
            }
    
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
        }

        tbody.appendChild(row);
    }
}