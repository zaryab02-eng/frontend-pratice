const page = document.getElementById("page");
const modeButton = document.getElementById("mode");
const container = document.getElementById("container");
const num = document.getElementById("num");
const inButton = document.getElementById("increase");
const deButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const counterBox = document.getElementById("counter-box");
const clockBox = document.getElementById("clock");
const resetAll = document.getElementById("resetAll");


let isDark = false;

modeButton.addEventListener("click", () => {
  isDark = !isDark;
  if (isDark) {
    page.style.backgroundColor = "#252627";
    page.style.color = "#ffffff";
    modeButton.style.backgroundColor = "#ffffff";
    modeButton.style.color = "#000000";
    modeButton.style.borderColor = "red";
    inButton.style.borderColor = "white";
    deButton.style.borderColor = "white";
    resetButton.style.borderColor = "white";
    container.style.borderColor = "#ffffff";
    container.style.backgroundColor = "#222823";
    counterBox.style.backgroundColor = "#904E55";
    clockBox.style.backgroundColor = "#904E55";
    modeButton.innerText = "☀️ Light Mode";
  } else {
    page.style.backgroundColor = "#D3F8E2";
    page.style.color = "#000000";
    modeButton.style.backgroundColor = "#000000";
    modeButton.style.color = "#ffffff";
    modeButton.style.borderColor = "blue";
    inButton.style.borderColor = "black";
    deButton.style.borderColor = "black";
    resetButton.style.borderColor = "black";
    container.style.borderColor = "#000000";
    container.style.backgroundColor = "#A9DEF9";
    counterBox.style.backgroundColor = "#F2EFE9";
    clockBox.style.backgroundColor = "#F2EFE9";
    modeButton.innerText = "🌙 Dark Mode";
  }
});

// Counter

let count = 0;

function inCount() {
    count = count + 1;
    num.innerText = count;
  };

function deCount() {
    count = count - 1;
    num.innerText = count;
  };

function countReset () {
  count = 0
  num.innerText = count;
};

inButton.addEventListener("click", inCount);
deButton.addEventListener("click", deCount);
resetButton.addEventListener("click", countReset);

// Clock

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").innerText = currentTime;
}

// Run once and then every second
updateClock();
setInterval(updateClock, 1000);

//Light theme special function

function lightTheme () {
    page.style.backgroundColor = "#D3F8E2";
    page.style.color = "#000000";
    modeButton.style.backgroundColor = "#000000";
    modeButton.style.color = "#ffffff";
    modeButton.style.borderColor = "blue";
    inButton.style.borderColor = "black";
    deButton.style.borderColor = "black";
    resetButton.style.borderColor = "black";
    container.style.borderColor = "#000000";
    container.style.backgroundColor = "#A9DEF9";
    counterBox.style.backgroundColor = "#F2EFE9";
    clockBox.style.backgroundColor = "#F2EFE9";
    modeButton.innerText = "🌙 Dark Mode";
}

// Reset Everything Button

function resetEverything () {
  countReset ();
  lightTheme ();
}

resetAll.addEventListener("click",resetEverything);

