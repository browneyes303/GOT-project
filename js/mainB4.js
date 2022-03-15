let charButton = document.querySelector('#charBtn')
let houseButton = document.querySelector('#houseBtn')
let body = document.getElementsByTagName("body")[0];
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");
let row0 = document.createElement("tr");
row0.innerHTML = "<th>Character Name</th><th>Aliases</th>"

tblBody.appendChild(row0);


let charFetch = () => {
    row0.innerHTML = "<th>!Character Name</th><th>Aliases</th>"
    for (p = 1; p < 10; p++)    // total 214 pages
        fetch(`https://www.anapioficeandfire.com/api/characters?page=${p}&pageSize=10;%20rel=%22next%22`)
            .then(result=>result.json())
            .then(data=> {
                console.log(data)
                
                Object.values(data).forEach(charObj => {
                    let row1 = document.createElement("tr");
                    // Name Column
                    let cell1 = document.createElement("td");
                    let cellText1 = document.createTextNode(`${charObj.name}`);
                    cell1.appendChild(cellText1);
                    row.appendChild(cell1);
                    // Aliases Column
                    let cell2 = document.createElement("td");
                    let cellText2 = document.createTextNode(`${charObj.aliases}`);
                    cell2.appendChild(cellText2);
                    row.appendChild(cell2);
                    // add the row to the end of the table body
                    tblBody.appendChild(row1);
                })
                // put the <tbody> in the <table>
                tbl.appendChild(tblBody);
                // appends <table> into <body>
                body.appendChild(tbl);
                // sets the border attribute of tbl to 2;
                tbl.setAttribute("border", "2");

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
            })
    // charButton.disabled = true
}
    
let houseFetch = () => {
    row0.innerHTML = "<th>!House Name</th><th>url</th>"
    for (q = 1; q < 50; q++) {
        fetch(`https://www.anapioficeandfire.com/api/houses?page=${q}&pageSize=10;rel="last"`)
        .then(result=>result.json())
        .then(data=> {
            console.log(data)
        Object.values(data).forEach(houseObj => {
            // console.log(houseObj);
            let row = document.createElement("tr");
            // Name Column
            let cell1 = document.createElement("td");
            let cellText1 = document.createTextNode(`${houseObj.name}`);
            cell1.appendChild(cellText1);
            row.appendChild(cell1);
            // Aliases Column
            let cell2 = document.createElement("td");
            let cellText2 = document.createTextNode(`${houseObj.url}`);
            cell2.appendChild(cellText2);
            row.appendChild(cell2);
            // add the row to the end of the table body
            tblBody.appendChild(row);
        })
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "2");

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
        })
    }
}

charButton.addEventListener('click', charFetch)
houseButton.addEventListener('click', houseFetch)

// charFetch();
