const namee = document.getElementById("name");
const btn = document.getElementById("btn");

const animals = [
  "Lion",
  "Wolf",
  "Tiger",
  "Elephant",
  "Rhino",
  "Bear",
  "Monkey",
];

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  const animalName = animals[randomIndex];
  namee.innerText = animalName;
});
