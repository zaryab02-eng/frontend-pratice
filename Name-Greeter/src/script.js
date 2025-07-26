const inputName = document.getElementById("name");
const button = document.getElementById("submit");
const namePrint = document.getElementById("hello-area");

button.addEventListener("click", function () {
    const userName = inputName.value;
    namePrint.innerText = `Hello ${userName}! , Have a great day ahead`;
    inputName.value = " ";
});

  inputName.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      // Step 3: Get value
      let userName = inputName.value;
      namePrint.innerText = `Hello ${userName}! , Have a great day ahead`;
      inputName.value = " ";
    }
  });