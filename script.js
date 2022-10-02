let g = {}
g.table = null
g.studentObjArr = []
firstRunDone = false

function tableGen() {
    if(!firstRunDone){
        firstRun()
    }
    else {

    }
}

function sortName() {
    g.studentObjArr.sort(nameCompare);
    function nameCompare( a, b ) {
        if ( a.name < b.name ){
            return -1;
        }
        if ( a.name > b.name ){
            return 1;
        }
        return 0;
    }
    tableGen()
}

function sortMark() {
    g.studentObjArr.sort(markCompare);
    function markCompare( a, b ) {
        if ( a.mark < b.mark ){
            return -1;
        }
        if ( a.mark > b.mark ){
            return 1;
        }
        return 0;
    }
    tableGen()
}

function sortAge() {
    g.studentObjArr.sort(ageCompare);
    function ageCompare( a, b ) {
        if ( a.age < b.age ){
            return -1;
        }
        if ( a.age > b.age ){
            return 1;
        }
        return 0;
    }
    tableGen()
}

function firstRun() {
    g.table = document.createElement('table')
    let headTr = document.createElement('tr')
    let headArray = []
    headArray[0] = document.createElement('th')
    headArray[0].innerText = `Name`
    headArray[1] = document.createElement('th')
    headArray[1].innerText = `Age`
    headArray[2] = document.createElement('th')
    headArray[2].innerText = `Grade`
    headArray[3] = document.createElement('th')
    headArray[3].innerText = `Delete`
    headArray.forEach(head)
    function head(x){
        headTr.appendChild(x)
    }
    g.table.appendChild(headTr)
}





