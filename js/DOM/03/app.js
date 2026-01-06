const display = document.getElementById("display");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const counter = document.getElementById("counter");

btn.addEventListener("click", () => {
  let inputTxt = input.value;

  !inputTxt
    ? (display.innerText = "Please type something")
    : (display.innerText = inputTxt);

  input.value = "";
});

input.addEventListener("input", () => {
  counter.innerText = `Characters: ${input.value.length}`;
});
