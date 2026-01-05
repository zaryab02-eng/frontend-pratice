const display = document.getElementById("display");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  display.innerText = input.value;
});
