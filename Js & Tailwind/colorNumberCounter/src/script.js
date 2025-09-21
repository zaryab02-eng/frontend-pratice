const display = document.getElementById("counterDisplay");
const minusBtn = document.getElementById("btnMinus");
const resetBtn = document.getElementById("btnReset");
const plusBtn = document.getElementById("btnPlus");

let count = 0;

function textColor() {
  display.textContent = count;

  display.classList.remove(
    "text-gray-900",
    "text-green-500",
    "text-yellow-500",
    "text-red-500"
  );

  if (count <= 4) {
    display.classList.add("text-green-500");
  } else if (count > 4 && count <= 9) {
    display.classList.add("text-yellow-500");
  } else {
    display.classList.add("text-red-500");
  }
}

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    textColor();
  }
});

plusBtn.addEventListener("click", () => {
  count++;
  textColor();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  textColor();
});
