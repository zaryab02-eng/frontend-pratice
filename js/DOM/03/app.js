const display = document.getElementById("display");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let inputTxt = input.value;

  !inputTxt
    ? (display.innerText = "Please type something")
    : (display.innerText = inputTxt);

  input.value = "";
});
