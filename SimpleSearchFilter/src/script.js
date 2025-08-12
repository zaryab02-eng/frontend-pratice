const nameEnter = document.getElementById("inputName");
const matchBtn = document.getElementById("button");

matchBtn.addEventListener("click", () => {
  const inputValue = nameEnter.value.trim();

  if (inputValue === "") {
    console.log("Please enter something");
    return;
  }

  const result = "Zaryab".toLowerCase().includes(inputValue.toLowerCase());
  alert(result);
});
