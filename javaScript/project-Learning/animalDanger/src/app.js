const namee = document.getElementById("name");
const btn = document.getElementById("btn");

const animals = [
  { name: "Lion", danger: true },
  { name: "Rabbit", danger: false },
  { name: "Tiger", danger: true },
  { name: "Deer", danger: false },
];

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  const animal = animals[randomIndex];
  namee.innerText = animal.name;

  if (animal.danger === true) {
    namee.className = "text-red-500";
  } else {
    namee.className = "text-green-500";
  }
});
