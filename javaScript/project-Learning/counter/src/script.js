const display = document.getElementById("display");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");

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
