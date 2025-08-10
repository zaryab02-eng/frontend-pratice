// script.js
const text = document.getElementById("text");
const btn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {
  if (text.classList.contains("text-gray-900")) {
    text.classList.remove("text-gray-900");
    text.classList.add("text-red-500");
  } else {
    text.classList.add("text-gray-900");
    text.classList.remove("text-red-500");
  }
});
