let body = document.getElementsByTagName(`body`)[0];
let header = document.getElementsByTagName(`h1`)[0];

let randomColor = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(60, 179, 113)", "rgb(238, 130, 238)", "rgb(255, 165, 0)","rgb(106, 90, 205)", "rgb(255, 99, 71)"];

function randomColorPicker(element){
    let randomRGB = randomColor[Math.floor (Math.random() * randomColor.length)];
    element.innerText = `RGB value: ${randomRGB}`;
    return randomRGB;
}

body.style.backgroundColor = randomColorPicker(header);