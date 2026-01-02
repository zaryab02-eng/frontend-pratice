const btn = document.getElementById("btn");
const text = document.getElementById("text");

text.innerText = "Current Mode: Dark";
btn.innerText = "☀️ Light Mode";
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

let isLight = false;

btn.addEventListener("click", () => {
  if (isLight === false) {
    btn.innerText = "🌙 Dark Mode";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    text.innerText = "Current Mode: Light";
  } else {
    btn.innerText = "☀️ Light Mode";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    text.innerText = "Current Mode: Dark";
  }
  isLight = !isLight;
});
