const inputName = document.getElementById("nameInput");
const inputEmail = document.getElementById("emailInput");
const inputAge = document.getElementById("ageInput");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const display = document.getElementById("profileDisplay");

saveBtn.addEventListener("click", () => {
  const userName = inputName.value.trim();
  const userEmail = inputEmail.value.trim();
  const ageValidate = inputAge.value.trim();
  const userAge = Number(inputAge.value.trim());

  if (userName === "" || userEmail === "" || ageValidate === "") {
    display.classList.add("text-red-500");
    display.innerText = "Please fill in all fields";
    return;
  } else if (userAge < 18) {
    display.classList.add("text-red-500");
    display.innerText = "You are underage for this profile!";
    return;
  } else {
    localStorage.setItem("Name", userName);
    localStorage.setItem("Email", userEmail);
    localStorage.setItem("Age", userAge);

    display.classList.remove("text-red-500");
    display.classList.add("text-green-500");
    display.innerText = `Profile Saved Successfully!✅`;
  }
});

loadBtn.addEventListener("click", () => {
  const savedName = localStorage.getItem("Name");
  const savedEmail = localStorage.getItem("Email");
  const savedAge = localStorage.getItem("Age");

  if (!savedName || !savedEmail || !savedAge) {
    display.classList.remove("text-green-500");
    display.classList.add("text-red-500");
    display.innerText = "No Profile found!";
    return;
  } else {
    display.classList.remove("text-red-500");
    display.classList.add("text-green-500");
    display.innerHTML = `
      <p><strong>👤 Name:</strong> ${savedName}</p>
      <p><strong>📧 Email:</strong> ${savedEmail}</p>
      <p><strong>🎂 Age:</strong> ${savedAge}</p>
    `;
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("Name");
  localStorage.removeItem("Email");
  localStorage.removeItem("Age");

  display.classList.remove("text-red-500");
  display.classList.add("text-green-500");
  display.innerText = "Profile cleared!";
});
