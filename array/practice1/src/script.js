const display = document.getElementById("display");
const button = document.getElementById("button");

const myMovie = ["Don", "Ra One"];

button.addEventListener("click", () => {
  display.textContent = `${myMovie[0]} & ${myMovie[1]}  are your movies available `;
});
