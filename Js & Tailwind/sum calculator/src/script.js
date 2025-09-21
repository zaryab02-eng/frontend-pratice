let button = document.getElementById("addButton");
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let result = document.getElementById("result");

function addNumber() {
    let n1 = Number(input1.value);
    let n2 = Number(input2.value);
    let sum = n1 + n2;
    result.innerText = "The sum is: " + sum;
}

button.addEventListener("click", addNumber);