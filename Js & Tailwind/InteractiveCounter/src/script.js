const display = document.getElementById("counterDisplay");
const plusOneBtn = document.getElementById("btnPlusOne");
const minusOneBtn = document.getElementById("btnMinusOne");
const resetBtn = document.getElementById("btnReset");
const plusFiveBtn = document.getElementById("btnPlusFive");
const minusFivebtn = document.getElementById("btnMinusFive");

let count = 0;

function updateDisplay() {
  display.innerText = count;
  if (count >= 10) {
    display.classList.add("text-red-500");
  } else {
    display.classList.remove("text-red-500");
  }
}

function plusOne() {
  count = count + 1;
  updateDisplay();
}

function minusOne() {
  if (count > 0) {
    count = count - 1;
  }
  updateDisplay();
}

function plusFive() {
  count = count + 5;
  updateDisplay();
}

function minusFive() {
  if (count >= 5) {
    count = count - 5;
  } else {
    count = 0;
  }
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

plusOneBtn.addEventListener("click", plusOne);
minusOneBtn.addEventListener("click", minusOne);
plusFiveBtn.addEventListener("click", plusFive);
minusFivebtn.addEventListener("click", minusFive);
resetBtn.addEventListener("click", reset);
