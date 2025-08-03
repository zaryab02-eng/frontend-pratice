const result = document.getElementById("resultArea");
const nameInput = document.getElementById("nameInput");
const button = document.getElementById("showNameBtn");


function nameHandle () {
    const nameEnter = nameInput.value;
    if (nameEnter === '') {
        result.textContent = "Please enter your name first";
        nameInput.value = '';
        return;
    } else {
        result.textContent = `Your name is : ${nameEnter}`;
        nameInput.value = '';
    }
};

button.addEventListener("click", () => {
    nameHandle();
});

nameInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        nameHandle();
    }
});