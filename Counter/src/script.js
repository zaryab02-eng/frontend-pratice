let num = document.getElementById("Number");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("resetButton");
let msg = document.getElementById("message");
let count = 0;

function updateButtonStyles() {
    increase.style.backgroundColor = count > 10 ? "gray" : "#2563eb";
    decrease.style.backgroundColor = count < 0 ? "gray" : "#2563eb";
    reset.style.backgroundColor = "#dc2626";
}

function numIncre () {
    if (count < 10) {
        count = count + 1;
        num.innerText = count;
        msg.innerText = " ";
        updateButtonStyles();
    } else {
        msg.innerText = "You can't increase beyond the limit";
        increase.style.backgroundColor = "gray";
    }
}

function numDecre () {
    if (count > 0) {
        count = count - 1;
        num.innerText = count;
        msg.innerText = " ";
        updateButtonStyles();
    } else {
        msg.innerText = "You can't decrease beyond the limit";
        decrease.style.backgroundColor = "gray";
    }
}

function resetValue () {
    count = 0;
    num.innerText = count;
    msg.innerText = "Counter has been reset ✅";
    updateButtonStyles();
}

increase.addEventListener("click", numIncre);
decrease.addEventListener("click", numDecre);
reset.addEventListener("click", resetValue);