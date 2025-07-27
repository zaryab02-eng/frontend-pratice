const result = document.getElementById("result");
const input = document.querySelector("#input input");
const submitButton = document.getElementById("submit");

function doubleNum() {
    if (input.value.trim() === "") {
        result.innerText = "Please enter some value!";
        return;
    }

    const num = Number(input.value);

    const newValue = num * 2;
    result.innerText = `${num} doubled is ${newValue}`;
    input.value = "";
}

submitButton.addEventListener("click", doubleNum);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        doubleNum();
    }
});
