const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");
const blueBtn = document.getElementById("blueBtn");
const body = document.body;

// Easy reset function
function clearThemes() {
  body.className =
    "min-h-screen flex flex-col items-center justify-center gap-6";
}

// Super clean button handlers
darkBtn.addEventListener("click", () => {
  clearThemes();
  body.classList.add("bg-gray-900", "text-white");
});

lightBtn.addEventListener("click", () => {
  clearThemes();
  body.classList.add("bg-white", "text-black");
});

blueBtn.addEventListener("click", () => {
  clearThemes();
  body.classList.add("bg-blue-500", "text-white");
});
