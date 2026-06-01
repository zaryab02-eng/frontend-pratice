const display = document.getElementById("disp");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

let count = 0;

incBtn.addEventListener("click", () => {
  count++;
  display.innerText = count;
});

decBtn.addEventListener("click", () => {
  count--;
  display.innerText = count;
});
