const button = document.getElementById("myBtn");
const display = document.getElementById("display");

button.addEventListener("click", () => {
  display.classList.remove("text-green-400");
  display.classList.add("text-yellow-500");
  display.innerText = "Loading...";
  button.disabled = true;

  setTimeout(() => {
    display.classList.remove("text-yellow-500");
    display.classList.add("text-green-400");
    display.innerText = "Done! Message loaded!";
    button.disabled = false;
  }, 3000);
});
