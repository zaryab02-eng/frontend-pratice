const display = document.getElementById("display");
const btn = document.getElementById("btn");

const numbers = [10, 20, 30, 40, 50];

btn.addEventListener("click", () => {
  const randomIndexes = Math.floor(Math.random() * numbers.length);
  const number = numbers[randomIndexes];
  display.innerText = number;
  if (number > 30) {
    display.className = "text-green-500";
  } else if (number <= 30) {
    display.className = "text-red-500";
  }
});
