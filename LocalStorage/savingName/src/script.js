const inputName = document.getElementById("nameInput");
const saveButton = document.getElementById("saveBtn");
const loadButton = document.getElementById("loadBtn");
const display = document.getElementById("nameDisplay");
const clearBtn = document.getElementById("clearBtn");

saveButton.addEventListener("click", () => {
  const realName = inputName.value.trim();

  if (realName === "") {
    display.classList.add("text-red-500");
    display.innerText = "Please enter your name first";
    return;
  } else {
    localStorage.setItem("savedName", realName);
    display.classList.remove("text-red-500");
    display.classList.add("text-green-500");
    display.innerText = `✅ Name Saved: ${realName}`;
  }
});

loadButton.addEventListener("click", () => {
  const savedName = localStorage.getItem("savedName");

  if (savedName) {
    display.classList.add("text-green-500");
    display.innerText = `Your saved name is: ${savedName}`;
  } else {
    display.classList.remove("text-green-500");
    display.classList.add("text-red-500");
    display.innerText = `No name saved yet`;
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("savedName");
  display.innerText = "Name cleared!";
});
