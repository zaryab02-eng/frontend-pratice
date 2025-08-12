const nameEnter = document.getElementById("inputName");
const matchBtn = document.getElementById("button");

console.log("JavaScript loaded!"); // Test if JS is working

matchBtn.addEventListener("click", () => {
  console.log("Button clicked!"); // Test if click works

  const nameInput = nameEnter.value.trim();
  console.log("User typed:", nameInput); // Test if input works

  const names = ["Zaryab", "Arshad", "Sabiha", "Altmash"];

  if (nameInput === "") {
    console.log("Input is empty");
    return;
  }

  let matchCount = 0;

  names.forEach((singleName) => {
    if (singleName.toLowerCase().includes(nameInput.toLowerCase())) {
      matchCount++;
      console.log("Match found:", singleName);
    }
  });

  console.log("Total matches:", matchCount);
  alert(`Found ${matchCount} matches`);
});
