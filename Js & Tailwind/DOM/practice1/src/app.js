const msg = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  msg.innerText = "Button was Clicked!!";
  button.innerText = "Clicked";
});
