const modeBtn = document.getElementById("btn");
const logo = document.getElementById("sam");
const banner = document.getElementById("banner");

let isDark = false;

modeBtn.addEventListener("click", () => {
  if (!isDark) {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-black");
    document.body.classList.add("text-white");
    logo.classList.remove("text-white");
    logo.classList.add("text-black");
    banner.classList.remove("bg-gray-500");
    banner.classList.add("bg-white");
    modeBtn.classList.remove("bg-yellow-600");
    modeBtn.classList.add("bg-blue-600");

    isDark = true;
  } else {
    if (isDark) {
      document.body.classList.remove("bg-black");
      document.body.classList.add("bg-white");
      document.body.classList.add("text-black");
      document.body.classList.remove("text-white");
      logo.classList.remove("text-black");
      logo.classList.add("text-white");
      banner.classList.remove("bg-white");
      banner.classList.add("bg-gray-500");
      modeBtn.classList.remove("bg-blue-600");
      modeBtn.classList.add("bg-yellow-600");

      isDark = false;
    }
  }
});
