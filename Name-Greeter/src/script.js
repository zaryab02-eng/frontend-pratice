const inputName = document.getElementById("name");
const button = document.getElementById("submit");
const namePrint = document.getElementById("hello-area");

// Step 1: Put your logic in a function
function greetUser() {
    const userName = inputName.value;
    if (userName === "") {
        namePrint.innerText = "Please enter your name first!";
    } else {
        namePrint.innerText = `Hello ${userName}, Have a great day ahead`;
        inputName.value = "";
    }
}

// Step 2: Call the function from both events
button.addEventListener("click", greetUser);

inputName.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        greetUser(); // Same function!
    }
});