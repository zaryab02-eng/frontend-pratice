const display = document.getElementById("display");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");
const reset = document.getElementById("reset");

let count = 0;

incBtn.addEventListener("click", () => {
  if (count < 10) {
    count = count + 1;
    display.innerText = count;
  }
});

decBtn.addEventListener("click", () => {
  if (count > 0) {
    count = count - 1;
    display.innerText = count;
  }
});

reset.addEventListener("click", () => {
  count = 0;
  display.innerText = count;
});
