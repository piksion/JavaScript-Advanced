// function printFilmTittles(films){
//     let result = document.getElementsByTagName("ul")[0];
//     result.innerHTML = "";
//     for(let i = 0; i < films.results.length; i++){
//         result.innerHTML += `<li>${films.results[i].title} </li>`;
//     }
// }

// $(document).ready(function(){
//     let button = document.getElementById("myBtn");
//     button.addEventListener("click",function(){
//         $.ajax({
//             method: "GET",
//             url:"https://swapi.dev/api/films",
//             success: function(response){
//                 printFilmTittles(response)
//             },
//             error: function(error){
//             console.log(error);
//             }
//         })
//     })
// })

function printFilmTittles(films){
    let result = document.getElementsByTagName("ul")[0];
    result.innerHTML = "";
    for(let i = 0; i < films.results.length; i++){
        result.innerHTML += `<li>${films.results[i].title} </li>`;
    }
}

let button = document.getElementById("myBtn");

function fetchFilmTitles(){
    fetch("https://swapi.dev/api/films")
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        printFilmTittles(myJson);
    })
}
button.addEventListener("click", fetchFilmTitles);