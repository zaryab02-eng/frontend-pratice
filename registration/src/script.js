const inputName = document.getElementById("nameInput");
const inputEmail = document.getElementById("emailInput");
const inputAge = document.getElementById("ageInput");
const button = document.getElementById("registerBtn");
const display = document.getElementById("messageDisplay");

button.addEventListener("click", () => {
  const realName = inputName.value.trim();
  const enteredEmail = inputEmail.value.trim();
  const ageValue = inputAge.value.trim();
  const age = Number(inputAge.value);

  if (realName === "") {
    display.innerText = "Please enter your name first";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (enteredEmail === "") {
    display.innerText = "Please enter your email";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (!enteredEmail.includes("@")) {
    display.innerText = "Please enter a valid email";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (ageValue === "") {
    display.innerText = "Please enter your age";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (age < 18) {
    display.innerText = "You must be at least 18 years old!";
    display.style.color = "red";
    display.style.fontWeight = "bold";
  } else {
    display.innerText = "Registration successful!";
    display.style.color = "green";
    display.style.fontWeight = "bold";
  }
});
