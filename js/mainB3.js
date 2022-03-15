let charName = document.querySelector('#charName')
let aliases = document.querySelector('#aliases')
let allegiances = document.querySelector('#allegiances')
let charButton = document.querySelector('button')


let charFetch = () => {
        fetch('https://anapioficeandfire.com/api/characters?page=1&pageSize=10')
            .then(result=>result.json())
            .then(data=> {
                console.log(data);

                // data.forEach((charObj) => {
                // })
                
                generate_table(data);
                
                function generate_table(data) {
                    // get the reference for the body
                    let body = document.getElementsByTagName("body")[0];
                    
                    // creates a <table> element and a <tbody> element
                    let tbl = document.createElement("table");
                    let tblBody = document.createElement("tbody");
                    
                    // creating all cells
                    for (let i = 0; i < data.length; i++) {
                        // creates a table row
                        let row = document.createElement("tr");
                    
                        for (let j = 0; j < 1; j++) { //columns
                        // Create a <td> element and a text node, make the text
                        // node the contents of the <td>, and put the <td> at
                        // the end of the table row
                                    let cell[h] = document.createElement("td");
                                    let cellText[h] = document.createTextNode(`${data[i].name}`);
                                    cell[h].appendChild(cellText[h]);
                                    row.appendChild(cell[h]);
                                
                        }                    
                        // add the row to the end of the table body
                        tblBody.appendChild(row);
                    }
                    
                    // put the <tbody> in the <table>
                    tbl.appendChild(tblBody);
                    // appends <table> into <body>
                    body.appendChild(tbl);
                    // sets the border attribute of tbl to 2;
                    tbl.setAttribute("border", "2");
                }
            })
}

charButton.addEventListener('click', charFetch)

//Houses API pull
// let housesFetch = () => {
//     fetch("https://anapioficeandfire.com/api/houses")
//         .then(result=>result.json())
//         .then(data=> {
//             console.log(data);
            
//         })
// }

// let houseButton = document.querySelector('button')

// houseButton.addEventListener('click', gotFetch)
