// function vehicleName(name){
//     let vehicle = document.getElementById("vehicle");
//     vehicle.innerText = name;
// }

// function vehicleStatus(status){
//     let statusTable = document.getElementsByTagName("tbody")[0];
//     statusTable.innerHTML = " ";
//     statusTable.innerHTML += `
//         <tr>
//             <td>Model:</td>
//             <td>${status.model}</td>
//         </tr>
//         <tr>
//             <td>Manufacturer</td>
//             <td>${status.manufacturer}</td>
//         </tr>
//         <tr>
//             <td>Crew</td>
//             <td>${status.crew}</td>
//         </tr>
//         <tr>
//             <td>Passengers</td>
//             <td>${status.passengers}</td>
//         </tr>
//         <tr>
//             <td>Class:</td>
//             <td>${status.vehicle_class}</td>
//         </tr>
//     `;
// }
// $(document).ready(function(){
//     let button = document.getElementById("myBtn");
//     button.addEventListener("click", function(){
//         $.ajax({
//             method: "GET",
//             url: "https://swapi.dev/api/vehicles/20",
//             success: function(response){
//                 vehicleName(response.name);
//                 vehicleStatus(response);
//             },
//             error: function(error){
//                 console.log(error);
//             }
//         })
//     })
// })

function vehicleName(name){
    let vehicle = document.getElementById("vehicle");
    vehicle.innerText = name;
}

function vehicleStatus(status){
    let statusTable = document.getElementsByTagName("tbody")[0];
    statusTable.innerHTML = " ";
    statusTable.innerHTML += `
        <tr>
            <td>Model:</td>
            <td>${status.model}</td>
        </tr>
        <tr>
            <td>Manufacturer</td>
            <td>${status.manufacturer}</td>
        </tr>
        <tr>
            <td>Crew</td>
            <td>${status.crew}</td>
        </tr>
        <tr>
            <td>Passengers</td>
            <td>${status.passengers}</td>
        </tr>
        <tr>
            <td>Class:</td>
            <td>${status.vehicle_class}</td>
        </tr>
    `;
}

let button = document.getElementById("myBtn");

function fetchVechicleInfo(){
    fetch("https://swapi.dev/api/vehicles/20 ")
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        vehicleName(myJson);
        vehicleStatus(myJson);
    })
}
button.addEventListener("click",fetchVechicleInfo);