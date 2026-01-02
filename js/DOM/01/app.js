const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

let isClicked = false;

btn.addEventListener("click", () => {
  if (isClicked) {
    txt.innerText = "Clicked";
  } else {
    txt.innerText = "UnClicked";
  }
  isClicked = !isClicked;
});
