const display = document.getElementById("num");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateColor() {
  if (count > 0) {
    display.style.color = "green";
  } else if (count < 0) {
    display.style.color = "red";
  } else {
    display.style.color = "yellow";
  }
}

updateColor();

incBtn.addEventListener("click", () => {
  count++;
  display.innerText = count;
  updateColor();
});

decBtn.addEventListener("click", () => {
  count--;
  display.innerText = count;
  updateColor();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  display.innerText = count;
  updateColor();
});
