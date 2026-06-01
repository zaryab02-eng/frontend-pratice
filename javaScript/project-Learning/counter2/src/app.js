const display = document.getElementById("disp");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const reset = document.getElementById("reset");

let count = 0;

function updateColor() {
  if (count > 0) {
    display.style.color = "green";
  } else if (count < 0) {
    display.style.color = "red";
  } else {
    display.style.color = "yellow";
  }
  display.innerText = count;
}

incBtn.addEventListener("click", () => {
  count++;

  updateColor();
});

decBtn.addEventListener("click", () => {
  count--;

  updateColor();
});

reset.addEventListener("click", () => {
  count = 0;

  updateColor();
});
