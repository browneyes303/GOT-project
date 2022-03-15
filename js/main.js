

let button = document.querySelector('#btn');
let houseButton = document.querySelector('#houseBtn');
let body = document.getElementsByTagName("body")[0];
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");
let tblHead = document.createElement("thead");
let row0 = document.createElement("tr");
let row = document.createElement("tr");
let charArr = [];
let anchor = document.getElementById('Anchor');
let myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {keyboard: true})
let modalTitle = document.querySelector('#staticBackdropLabel');
let modalBody = document.querySelector('.modal-body')
let closeModalButtons = document.querySelector('.modal-content')

row0.innerHTML = "<th>Character Name</th><th>Aliases</th><th># of Houses</th>"
row0.setAttribute('class', 'table-danger table-bordered border-dark')
tblHead.appendChild(row0);

const getChars = async () => {
    
    let pageIndex = 1;
    let resultsArr = [];
    
    do{
        
        let chars = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${pageIndex}&pageSize=50`)
        resultsArr = await chars.json();
        
        charArr = [...charArr, ...resultsArr];
        
        pageIndex++;
    }
    while(resultsArr.length > 0);
    
    console.log(charArr);

    // DOM Manipulation

    Object.values(charArr).forEach(charObj => {
        let row = document.createElement("tr");

        // Name Column
        let cell1 = document.createElement("td");
        let cellText1 = document.createTextNode(`${charObj.name}`);
        cell1.appendChild(cellText1);
        row.appendChild(cell1);
        let cellText2 = document.createElement('td');

        // Aliases Column
        for(let x = 0; x < charObj.aliases.length; x++) {
            cellText2.innerHTML += `<p>${charObj.aliases[x]}</p>`;
            x++
        }

        let cell2 = document.createElement("td");
        cell2.appendChild(cellText2);
        row.appendChild(cell2);
        // Houses Column
        let cell3 = document.createElement("td");
        let cellLink = document.createElement("a");
        cellLink.setAttribute('href', `${charObj.url}`);
        cellLink.setAttribute('id', 'Anchor');
        eventListener(cellLink);
        let cellText3 = document.createTextNode(`${charObj.allegiances.length}`);
        cell3.appendChild(cellLink);
        cellLink.appendChild(cellText3);
        row.appendChild(cell3);
        // add the row to the end of the table body
        tblBody.appendChild(row);
        // console.log(cellLink.getAttribute('href'));
    })
    // put the <tHead> in the <table>
    tbl.appendChild(tblHead);
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("class", "table table-warning table-striped table-bordered border-dark");
    sortTable();
}

function sortTable() {
    HTMLTableSectionElement.prototype.sort = function(cb){
        Array
        .prototype
        .slice
        .call(this.rows)
        .sort(cb)
        .forEach((e,i,a)=>{
            this.appendChild(this.removeChild(e));
        },this);
    }
    document.querySelector('table').tBodies[0].sort(function(a, b){
        return a.textContent.localeCompare(b.textContent);
    });
}


function eventListener(link) {
    
    link.addEventListener('click', async e=> {
        
        e.preventDefault();
        let detailedAPIEndpoint = e.target.href;
        let apiCall = await fetch(detailedAPIEndpoint);
        let detailedInfo = await apiCall.json();
        
        // console.log(detailedInfo.name);
        modalTitle.innerText = `${detailedInfo.name}`; //name of character
        modalBody.innerHTML = ""

        //pull house names
        if(detailedInfo.allegiances.length > 0){
            detailedInfo.allegiances.forEach(houseUrl =>{
                displayHouseInfo(houseUrl);
            })
        }
        myModal.show();
    })
}   


displayHouseInfo = async houseUrl => {
    let houseAPICall = await fetch(houseUrl);
    let houseInfo = await houseAPICall.json();

    // console.log(houseInfo.name);
    modalBody.innerHTML += `<li>${houseInfo.name}</li>`
    // take info and display on DOM
}

closeModalButtons.addEventListener('click', ()=>{
    myModal.hide()
})
getChars();



// const flattenHouseData = () => {
//     let newHouseList = houseArr.filter(house => house.swornMembers.length > 0);
//     let charArrCopy = []

//     charArr.forEach((char) => {
//         charArrCopy.push(char)
//     })
//     console.log(charArrCopy);

//     let flattened = newHouseList.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []).map(o => o.swornMembers)
//     console.log(newHouseList);
//     console.log(flattened);
// }


// button.addEventListener('click', )
