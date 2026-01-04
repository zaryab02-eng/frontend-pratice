const btn = document.getElementById("btn");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("rst");

let isLight = false;
let count = 0;

/* Initial state */
document.body.classList.add("dark");
text.innerText = "Current Mode: Dark";
btn.innerText = "☀️ Light Mode";
counter.innerText = `Theme toggled ${count} times`;

resetBtn.innerText = "RESET";
resetBtn.style.backgroundColor = "red";
resetBtn.style.color = "white";

btn.addEventListener("click", () => {
  count++;
  counter.innerText = `Theme toggled ${count} times`;

  if (!isLight) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");

    btn.innerText = "🌙 Dark Mode";
    text.innerText = "Current Mode: Light";
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");

    btn.innerText = "☀️ Light Mode";
    text.innerText = "Current Mode: Dark";
  }

  if (count === 5) {
    btn.disabled = true;
    text.innerText = "Toggle limit reached";
  }

  text2.innerText =
    count % 2 === 0 ? "You like switching themes 😄" : "Make up your mind 😅";

  isLight = !isLight;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  isLight = false;

  document.body.classList.remove("light");
  document.body.classList.add("dark");

  counter.innerText = `Theme toggled ${count} times`;
  text.innerText = "Current Mode: Dark";
  text2.innerText = "";

  btn.disabled = false;
  btn.innerText = "☀️ Light Mode";
});
