const nameEnter = document.getElementById("inputName");
const matchBtn = document.getElementById("button");
const resultDiv = document.getElementById("result");

matchBtn.addEventListener("click", () => {
  let nameInput = nameEnter.value.trim();
  const names = ["Arshad", "Sabiha", "Zaryab", "Altamash"];

  if (nameInput === "") {
    resultDiv.textContent = "Please Enter a name first";
    return;
  }

  let count = 0;

  names.forEach((singleName) => {
    if (singleName.toLowerCase().includes(nameInput.toLowerCase())) {
      count++;
    }
  });

  if (count > 0) {
    const word = count === 1 ? "match" : "matches";
    resultDiv.textContent = `Found ${count} ${word}`;
  } else {
    resultDiv.textContent = `No ${word} Found!`;
  }
});
