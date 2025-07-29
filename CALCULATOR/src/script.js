const displayy = document.getElementById("display");
const buttons = Array.from(document.querySelectorAll('#keypad button'));

let currentInput = '';
let previousInput = '';
let opeator = null;

function updateDisplay () {
    displayy.innerText = currentInput || '0';
}