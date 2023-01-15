const chart = [];
let keys = 0;
let isFXMode = false;

parseChart(`source.txt`);

async function parseChart(fileName) {
    const res = await fetch(fileName);
    const rawData = await res.text();
    const data = rawData.split(`\n`).map(element => element.trim()).filter(element => element !== ``);

    let isHeader = true;
    for (const datum of data) {
        if (datum === `*---------------------- HEADER FIELD`) {
            // Start Header Field
            const obj = {};
            chart.push(obj);
        } else if (datum === `*---------------------- MAIN DATA FIELD`) {
            // Start Main Data Field
            isHeader = false;
        } else if (isHeader) {
            // Parse Header Field
            const key = datum.slice(1, datum.indexOf(` `));
            const value = datum.slice(datum.indexOf(` `) + 1);
            
            if ([`TITLE`, `GENRE`, `ARTIST`, `BPM`, `PLAYLEVEL`, `RANK`].includes(key)) {
                chart[0][key] = value;
            }
        } else {
            // Parse Main Data Field
            const [key, value] = datum.split(`:`);
            const measure = Number(key.slice(1, 4));
            const lane = key.slice(4);

            while (chart.length - 1 < measure) {
                const obj = {};
                chart.push(obj);
            }
            
            chart[measure][lane] = value;
        }
    }

    // FX 모드 구분
    keys = chart[0][`GENRE`];
    if (keys.includes(`+2`)) {
        keys = Number(keys[0]);
        isFXMode = true;
    }

    chartDefault();
    chartInfo();
}

// 4/4 박자에서 한 마디를 몇 픽셀로 표기할 것인가
const displaySize = 256;

// 노트별 참조 리소스
const noteSide = `../side.png`;
const noteFX = `fx.png`;
const sideWidth = 60;
// 모드별 버튼 리소스 획득
const getButtonResources = () => {
    switch (keys) {
        case 4:
            return [`4b.png`, `4w.png`, 30];
        case 5:
            return [`5b.png`, `5w.png`, 24];
        case 6:
            return [`6b.png`, `6w.png`, 20];
    }
}
const [noteBlack, noteWhite, laneWidth] = getButtonResources();
let chipSize = 5;
let currentOrder = ``;
let isSideTrackMirror = false;
let noteCount = 0;

function chartInfo() {
    const mode = isFXMode ? `${keys + 2}B` : `${keys}B`;
    const title = chart[0][`TITLE`];
    document.title = `[${mode} SC] ${title}`;

    const header = document.getElementById(`header`);
    const artist = chart[0][`ARTIST`];
    const bpm = chart[0][`BPM`];
    const level = chart[0][`PLAYLEVEL`];
    header.innerText = `[${mode} SC] ${title} / Artist: ${artist} / BPM: ${bpm} / Level: ${level} / Notes: ${noteCount}`;

    // 키보드 입력 받기
    window.addEventListener(`keydown`, e => {
        switch (e.key) {
            case `d`:
            case `D`:
                chartDefault();
                break;
            case `c`:
            case `C`:
                chartCustom();
                break;
            case `m`:
            case `M`:
                chartMirror();
                break;
            case `r`:
            case `R`:
                chartRandom();
                break;
            case `h`:
            case `H`:
                chartHalf();
                break;
            case `s`:
            case `S`:
                setChipSize();
                break;
        }
    });
}

// 차트 그리기
function makeChart() {
    // 기존에 생성된 보면이 있다면 지우고 새로 만들기
    document.getElementById(`data`)?.remove();
    
    // 현재 레인 순서를 패턴 아래에 텍스트로 표기
    const getTextFromOrder = () => {
        switch (keys) {
            case 4:
                return `[${Number(currentOrder) + 1111} + ${isSideTrackMirror ? `RL` : `LR`}]`;
            case 5:
                return `[${Number(currentOrder) + 11111} + ${isSideTrackMirror ? `RL` : `LR`}]`;
            case 6:
                return `[${Number(currentOrder) + 111111} + ${isSideTrackMirror ? `RL` : `LR`}]`;
        }
    };
    document.getElementById(`order`).innerText = getTextFromOrder();
    
    // 전역 틀 만들기
    const globalTable = document.createElement(`table`);
    const globalTr = document.createElement(`tr`);
    let globalTd = document.createElement(`td`);
    
    globalTable.id = `data`;
    globalTable.append(globalTr);
    
    document.getElementById(`article`).append(globalTable);
    
    globalTr.append(globalTd);
    
    // 레인별 롱 노트 종료 여부
    const sideAlive = new Array(2).fill(false);
    const FXAlive = new Array(2).fill(false);
    const longAlive = new Array(keys).fill(false);
    
    // 마디별 노트 작성
    for (let measure = 1; measure < chart.length; measure++) {
        // 곡마다 시작 마디를 설정하면 그 번호가 맨 아래로 가게끔 할 수 있다.
        const measureStart = Number(chart[0][`RANK`]);
        const measureReal = measure - measureStart;
        if (measureReal >= 0 && measureReal % 4 === 0) {
            globalTd = document.createElement(`td`);
            globalTr.append(globalTd);
        }

        // 지역 틀 만들기
        const localTable = document.createElement(`table`);
        const localTr = document.createElement(`tr`);
        
        globalTd.insertBefore(localTable, globalTd.firstChild);
        localTable.append(localTr);
        localTable.className = `fixed`;
        
        const localTh = document.createElement(`th`);
        const localTd = document.createElement(`td`);
        const div = document.createElement(`div`);
        
        localTr.append(localTh);
        localTr.append(localTd);
        localTh.innerHTML = measure;
        localTd.className = `chart`;
        localTd.append(div);
        
        // 레인별 노트 위치
        const sideArray = [chart[measure][`04`], chart[measure][`07`]];
        const chipFXArray = [chart[measure][`16`], chart[measure][`14`]];
        const longFXArray = [chart[measure][`56`], chart[measure][`54`]];
        const getButtonArray = () => {
            switch (keys) {
                case 4:
                    return [[chart[measure][`11`], chart[measure][`12`], chart[measure][`14`], chart[measure][`15`]],
                            [chart[measure][`51`], chart[measure][`52`], chart[measure][`54`], chart[measure][`55`]]];
                case 5:
                    return [[chart[measure][`11`], chart[measure][`12`], chart[measure][`13`], chart[measure][`14`], chart[measure][`15`]],
                            [chart[measure][`51`], chart[measure][`52`], chart[measure][`53`], chart[measure][`54`], chart[measure][`55`]]];
                case 6:
                    return [[chart[measure][`11`], chart[measure][`12`], chart[measure][`13`], chart[measure][`15`], chart[measure][`18`], chart[measure][`19`]],
                            [chart[measure][`51`], chart[measure][`52`], chart[measure][`53`], chart[measure][`55`], chart[measure][`58`], chart[measure][`59`]]];
            }
        };
        const [chipArray, longArray] = getButtonArray();

        // 롱 노트 최종 위치
        const sidePos = new Array(2).fill(0);
        const FXPos = new Array(2).fill(0);
        const longPos = new Array(keys).fill(0);

        // 레인 재배치
        if (isSideTrackMirror) {
            [sideArray[0], sideArray[1]] = [sideArray[1], sideArray[0]];
            [chipFXArray[0], chipFXArray[1]] = [chipFXArray[1], chipFXArray[0]];
            [longFXArray[0], longFXArray[1]] = [longFXArray[1], longFXArray[0]];
        }
        const order = Array.from(currentOrder);
        switch (keys) {
            case 4:
                [chipArray[0], chipArray[1], chipArray[2], chipArray[3]] =
                [chipArray[order[0]], chipArray[order[1]], chipArray[order[2]], chipArray[order[3]]];
                [longArray[0], longArray[1], longArray[2], longArray[3]] =
                [longArray[order[0]], longArray[order[1]], longArray[order[2]], longArray[order[3]]];
                break;
            case 5:
                [chipArray[0], chipArray[1], chipArray[2], chipArray[3], chipArray[4]] =
                [chipArray[order[0]], chipArray[order[1]], chipArray[order[2]], chipArray[order[3]], chipArray[order[4]]];
                [longArray[0], longArray[1], longArray[2], longArray[3], longArray[4]] =
                [longArray[order[0]], longArray[order[1]], longArray[order[2]], longArray[order[3]], longArray[order[4]]];
                break;
            case 6:
                [chipArray[0], chipArray[1], chipArray[2], chipArray[3], chipArray[4], chipArray[5]] =
                [chipArray[order[0]], chipArray[order[1]], chipArray[order[2]], chipArray[order[3]], chipArray[order[4]], chipArray[order[5]]];
                [longArray[0], longArray[1], longArray[2], longArray[3], longArray[4], longArray[5]] =
                [longArray[order[0]], longArray[order[1]], longArray[order[2]], longArray[order[3]], longArray[order[4]], longArray[order[5]]];
                break;
        }

        // 화면에 채보 출력
        makeChartFromArray(div, sideArray, noteSide, sideWidth, true, sideAlive, sidePos);
        if (isFXMode) {
            makeChartFromArray(div, chipFXArray, noteFX, sideWidth, false);
            makeChartFromArray(div, longFXArray, noteFX, sideWidth, true, FXAlive, FXPos);
        }
        makeChartFromArray(div, chipArray, null, laneWidth, false);
        makeChartFromArray(div, longArray, null, laneWidth, true, longAlive, longPos);
    }
}

// 주어진 배열에 맞게 채보 작성
function makeChartFromArray(div, inputArray, noteSource, noteWidth, isLongArray, longAlive = null, longPos = null) {
    const noteLiteral = `01`;
    const maxLane = !noteSource ? keys : 2;
    // 해당 레인이 백건반인지 흑건반인지 파악
    const getNoteImage = lane => {
        switch (keys) {
            case 4:
                if (lane === 1 || lane === 2) {
                    return noteBlack;
                } else {
                    return noteWhite;
                }
            case 5:
                if (lane === 1 || lane === 3) {
                    return noteBlack;
                } else {
                    return noteWhite;
                }
            case 6:
                if (lane === 1 || lane === 4) {
                    return noteBlack;
                } else {
                    return noteWhite;
                }
        }
    };

    // 노트 위치 설정 후 삽입
    const insertNote = (div, source, noteStyle) => {
        const note = document.createElement(`img`);
        note.src = source;
        note.setAttribute(`style`, noteStyle);
        div.append(note);
    };

    for (let lane = 0; lane < maxLane; lane++) {
        if (maxLane === keys) {
            noteSource = getNoteImage(lane);
        }

        if (!isLongArray) {
            // 칩 노트
            const bits = inputArray[lane] ? inputArray[lane].length / 2 : 0;
            for (let pos = 0; pos < bits; pos++) {
                if (inputArray[lane].slice(pos * 2, (pos + 1) * 2) === noteLiteral) {
                    insertNote(div, noteSource, `bottom: ${pos * displaySize / bits - 1}px; left: ${lane * noteWidth}px; width: ${noteWidth}px; height: ${chipSize}px;`);
                    noteCount++;
                }
            }
        } else {
            // 롱 노트
            const bits = inputArray[lane] ? inputArray[lane].length / 2 : 0;
            for (let pos = 0; pos < bits; pos++) {
                if (inputArray[lane].slice(pos * 2, (pos + 1) * 2) === noteLiteral) {
                    // 롱노트 시작점을 체크
                    if (!longAlive[lane]) {
                        longPos[lane] = pos;
                    } else {
                        insertNote(div, noteSource, `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * noteWidth}px; width: ${noteWidth}px; height: ${(pos - longPos[lane]) * displaySize / bits}px;`);
                        noteCount++;
                    }
    
                    // 롱노트 사활 토글
                    longAlive[lane] = !longAlive[lane];
                }
    
                // 다음 마디까지 롱노트가 이어질 때
                if (longAlive[lane] && pos === (bits - 1)) {
                    insertNote(div, noteSource, `bottom: ${longPos[lane] * displaySize / bits - 1}px; left: ${lane * noteWidth}px; width: ${noteWidth}px; height: ${(bits - longPos[lane]) * displaySize / bits + 1}px;`);
                }
            }
    
            // 전 마디부터 이번 마디도 꽉 채울 때
            if (longAlive[lane] && !inputArray[lane]) {
                insertNote(div, noteSource, `bottom: ${-1}px; left: ${lane * noteWidth}px; width: ${noteWidth}px; height: ${displaySize + 1}px;`);
            }
        }
    }
}

// 정규 배치 생성
function chartDefault() {
    const getDefaultOrder = () => {
        switch (keys) {
            case 4:
                return `0123`;
            case 5:
                return `01234`;
            case 6:
                return `012345`;
        }
    }
    currentOrder = getDefaultOrder();

    isSideTrackMirror = false;
    makeChart();
}

// 커스텀 배치 생성
function chartCustom() {
    const getExampleOrder = () => {
        switch (keys) {
            case 4:
                return `1234`;
            case 5:
                return `12345`;
            case 6:
                return `123456`;
        }
    }

    const order = prompt(`원하는 랜덤 배치를 입력해주세요.`, getExampleOrder());
    // 유효하지 않은 경우 중도 취소
    if (order.length != keys) {
        alert(`잘못된 입력입니다. 키 수를 맞춰주세요.`);
        return;
    }

    isSideTrackMirror = confirm(`사이드 트랙을 서로 바꿀까요?`);

    // 입력받은 텍스트를 재배치할 레인으로 변환
    const getOrderFromText = order => {
        switch (keys) {
            case 4:
                order -= 1111;
                break;
            case 5:
                order -= 11111;
                break;
            case 6:
                order -= 111111;
                break;
        }
    
        return String(order).padStart(keys, `0`);
    }
    currentOrder = getOrderFromText(order);
    makeChart();
}

// 미러 배치 생성
function chartMirror() {
    const getMirrorOrder = () => {
        switch (keys) {
            case 4:
                return `3210`;
            case 5:
                return `43210`;
            case 6:
                return `543210`;
        }
    }
    currentOrder = getMirrorOrder();

    isSideTrackMirror = true;
    makeChart();
}

// 배열이 주어졌을 때 임의의 레인을 생성
function getRandomOrder(array) {
    const order = [];
    // 최소 이상 최대 미만에서 임의의 정수 생성
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    while (array.length > 0) {
        const num = getRandomInt(0, array.length);
        order.push(array[num]);
        array.splice(num, 1);
    }

    return order.join(``);
}

// 랜덤 배치 생성
function chartRandom() {
    const array = [];

    for (let i = 0; i < keys; i++) {
        array.push(i);
    }

    // 사이드는 참 거짓만 판단하면 됨
    currentOrder = getRandomOrder(array);
    isSideTrackMirror = Math.random() < 0.5;
    makeChart();
}

// 하프 랜덤 배치 생성
function chartHalf() {
    const setLeftRight = () => {
        switch (keys) {
            case 4:
            case 5:
                return [[0, 1], [2, 3]];
            case 6:
                return [[0, 1, 2], [3, 4, 5]];
        }
    }
    const [left, right] = setLeftRight();

    currentOrder = getRandomOrder(left);
    if (keys === 5) {
        currentOrder += `2`;
    }
    currentOrder += getRandomOrder(right);

    isSideTrackMirror = false;
    makeChart();
}

// 칩 노트 크기 설정
function setChipSize() {
    chipSize = Number(prompt(`칩 노트 크기를 설정해 주세요.`, 5));
    makeChart();
}
