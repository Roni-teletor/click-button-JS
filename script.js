let boxColor = document.querySelector("#boxxing"); 
let clickButton = document.querySelector("button");

clickButton.innerText = "Click this button to change the color";



const setBgGreen = () => {
    boxColor.style.background = "green"
}

clickButton.onclick = setBgGreen;