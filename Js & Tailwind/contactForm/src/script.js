const inputName = document.getElementById("contactName");
const inputEmail = document.getElementById("contactEmail");
const inputPhone = document.getElementById("contactPhone");
const inputMsg = document.getElementById("contactMessage");
const button = document.getElementById("contactBtn");
const display = document.getElementById("contactDisplay");

button.addEventListener("click", () => {
  const realName = inputName.value.trim();
  const userEmail = inputEmail.value.trim();
  const userPhone = inputPhone.value.trim();
  const userMsg = inputMsg.value.trim();

  if (realName === "") {
    display.innerText = "Please enter your name";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (userEmail === "") {
    display.innerText = "Please enter your email";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (!userEmail.includes("@") || !userEmail.includes(".")) {
    display.innerText = "Please enter a valid email with @ and .";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (userPhone === "") {
    display.innerText = "Please enter your phone number";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (isNaN(Number(userPhone))) {
    display.innerText = "Please make sure your phone number have digits only";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (userPhone.length !== 10) {
    display.innerText = "Phone number must be exactly 10 digits";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (userMsg === "") {
    display.innerText = "Please enter a message!";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else if (userMsg.length < 10) {
    display.innerText = "Message must be at least 10 characters long";
    display.style.color = "red";
    display.style.fontWeight = "bold";
    return;
  } else {
    display.innerText = "Message sent successfully!";
    display.style.color = "green";
    display.style.fontWeight = "bold";
  }
});
