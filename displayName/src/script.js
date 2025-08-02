let result = document.getElementById("resultArea");
let nameInput = document.getElementById("nameInput");
let button = document.getElementById("showNameBtn");

function printName () {
    const name = nameInput.value;
    result.textContent = name;
}

button.addEventListener("click", printName);

nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        printName();
    }
});