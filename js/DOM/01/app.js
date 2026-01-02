const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

let isClicked = false;

txt.innerText = "UnClicked";
btn.innerText = "Turn ON";

btn.addEventListener("click", () => {
  if (isClicked) {
    txt.innerText = "Clicked";
    btn.innerText = "Turn OFF";
  } else {
    txt.innerText = "UnClicked";
    btn.innerText = "Turn ON";
  }
  isClicked = !isClicked;
});
