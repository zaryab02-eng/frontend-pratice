const btn = document.getElementById("btn");
const display = document.getElementById("name");

const animals = [
  { name: "Lion", danger: true },
  { name: "Rabbit", danger: false },
  { name: "Tiger", danger: true },
  { name: "Deer", danger: false },
];

btn.addEventListener("click", () => {
  const result = animals.filter((animal) => {
    return animal.danger === true;
  });

  const aniName = result.map((animal) => {
    return animal.name;
  });
  display.innerText = aniName;
});
