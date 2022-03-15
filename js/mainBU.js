let charName = document.querySelector('#charName')
let aliases = document.querySelector('#aliases')
let allegiances = document.querySelector('#allegiances')
let charButton = document.querySelector('button')

let charFetch = () => {
    fetch('https://anapioficeandfire.com/api/characters?page=1&pageSize=10')
        .then(result=>result.json())
        .then(data=> {
            console.log(data);
            console.log(data.length);
            
            data.forEach((charObj) => {
                let name = charObj.name
                // console.log(name);
                charName.innerHTML += name
                aliases.innerText += `<td>${charObj.aliases}</td>`
                // allegiances.innerText += charObj.allegiances
            })
        })
}


charButton.addEventListener('click', charFetch)

// for(let i = 1; i <= 214; i++){
//     charFetch(i)
// }

//Houses API pull
// let housesFetch = () => {
//     fetch("https://anapioficeandfire.com/api/houses")
//         .then(result=>result.json())
//         .then(data=> {
//             console.log(data);
            
//         })
// }

// // let profilePic = document.querySelector('#avatar')
// // let name = document.querySelector('#fullname')
// // let userName = document.querySelector('#username')
// // let email = document.querySelector('#email')
// // let city = document.querySelector('#city')
// let houseButton = document.querySelector('button')

// houseButton.addEventListener('click', gotFetch)
