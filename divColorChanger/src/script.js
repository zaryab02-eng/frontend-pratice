const div = document.getElementById("div");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  div.classList.toggle("bg-red-500");
});
