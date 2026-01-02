const btn = document.getElementById("btn");

btn.innerText = "☀️ Light Mode";
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

let isLight = false;

btn.addEventListener("click", () => {
  if ((isLight = false)) {
    btn.innerText = "🌙 Dark Mode";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  } else {
    btn.innerText = "☀️ Light Mode";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  }
  isLight = !isLight;
});
