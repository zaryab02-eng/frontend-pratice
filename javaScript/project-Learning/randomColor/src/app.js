const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
  "orange",
  "violet",
  "aqua",
];

btn.addEventListener("click", () => {
  const colorRandomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[colorRandomIndex];
  document.body.style.backgroundColor = randomColor;
  txt.innerText = randomColor;
});
