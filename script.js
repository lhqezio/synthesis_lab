let g = {}
g.table = null
g.studentObjArr = []
firstRunDone = false
document.querySelector('#add').addEventListener('click',addName)
document.querySelector('#sortName').addEventListener('click',sortName)
document.querySelector('#sortAge').addEventListener('click',sortAge)
document.querySelector('#sortGrade').addEventListener('click',sortMark)
deleteRow()

function tableGen() {
    if(!firstRunDone){
        firstRun()
    }
    g.studentObjArr.forEach(dd)

    function dd(k,i) {
        let trashCan = document.createElement('p');
        trashCan.innerText = '🗑️'
        trashCan.setAttribute('id',String(i+1))
        let childTr = document.createElement('tr')
        let childArray = []
        childArray[0] = document.createElement('td')
        childArray[0].innerText = k['name']
        childArray[1] = document.createElement('td')
        childArray[1].innerText = k['age']
        childArray[2] = document.createElement('td')
        childArray[2].innerText = k['mark']
        childArray[3] = document.createElement('td')
        childArray[3].appendChild(trashCan)
        childArray.forEach(head)
        function head(x){
            childTr.appendChild(x)
        }
        g.table.appendChild(childTr)
    }
    document.querySelector('#tableSec').replaceChildren(g.table)
    deleteRow()
}

function addName() {
    let name = document.getElementById(`name`).value
    let age = document.getElementById(`age`).value
    let mark = document.getElementById('mark').value
    g.studentObjArr[g.studentObjArr.length]={
        'name' : name,
        'age' : age,
        'mark' : mark
    }
    tableGen()
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

function deleteRow() {
    g.studentObjArr.forEach(addEvent)
    function addEvent(k,i){
       let curElem = document.getElementById(`${i+1}`)
        curElem.addEventListener('click',()=>{g.studentObjArr.splice(i,1);tableGen()})
    }
}





