const button = document.getElementById("modeButton");
const page = document.getElementById("page");

let isDark = false;

button.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    // Switch to Dark
    page.classList.replace("bg-white", "bg-black");
    page.classList.replace("text-black", "text-white");

    button.classList.replace("bg-black", "bg-white");
    button.classList.replace("text-white", "text-black");
    button.classList.replace("border-blue-600", "border-red-600");

    button.innerText = "☀️ Light Mode";
  } else {
    // Switch to Light
    page.classList.replace("bg-black", "bg-white");
    page.classList.replace("text-white", "text-black");

    button.classList.replace("bg-white", "bg-black");
    button.classList.replace("text-black", "text-white");
    button.classList.replace("border-red-600", "border-blue-600");

    button.innerText = "🌙 Dark Mode";
  }
});
