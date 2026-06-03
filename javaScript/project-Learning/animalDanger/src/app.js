const namee = document.getElementById("name");
const btn = document.getElementById("btn");

const animals = [
  { name: "Lion", danger: true, legs: 4 },
  { name: "Spider", danger: false, legs: 8 },
  { name: "Rabbit", danger: false, legs: 4 },
];

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  const animal = animals[randomIndex];
  namee.innerText = `${animal.name}\n${animal.legs} legs\n ${animal.danger ? `Dangerous` : ` Safe`}`;

  if (animal.danger === true) {
    namee.className = "text-red-500";
  } else {
    namee.className = "text-green-500";
  }
});
