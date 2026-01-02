const btn = document.getElementById("btn");
const text = document.getElementById("text");
const counter = document.getElementById("counter");

let isLight = false;
let count = 0;

text.innerText = "Current Mode: Dark";
btn.innerText = "☀️ Light Mode";
counter.innerText = `Theme toggled ${count} times`;

document.body.style.backgroundColor = "black";
document.body.style.color = "white";

btn.addEventListener("click", () => {
  if (isLight === false) {
    btn.innerText = "🌙 Dark Mode";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    text.innerText = "Current Mode: Light";
    count += 1;
    counter.innerText = `Theme toggled ${count} times`;
  } else {
    btn.innerText = "☀️ Light Mode";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    text.innerText = "Current Mode: Dark";
    count += 1;
    counter.innerText = `Theme toggled ${count} times`;
  }

  if (count === 5) {
    btn.disabled = true;
    text.innerText = "Toggle limit reached";
    btn.style.background = "gray";
    btn.style.color = "red";
  }
  isLight = !isLight;
});
