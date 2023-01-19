let names = ["Petar","Jovana","Ana","Bobi","Sergej"];

let button = document.getElementsByTagName(`button`)[0];
let list = document.getElementsByTagName(`ul`)[0];

function addingNames(person,element){
    for(let name of person){
        element.innerHTML += `<li> ${name} </li>`;
    }
}

button.addEventListener("click", function(){
    addingNames(names,list);
})

