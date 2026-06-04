const display = document.getElementById("name");
const btn = document.getElementById("btn");

const animals = [
  { name: "Lion", danger: true },
  { name: "Rabbit", danger: false },
  { name: "Tiger", danger: true },
  { name: "Deer", danger: false },
];

btn.addEventListener("click", () => {
  const result = animals.find((animal) => {
    return animal.danger;
  });

  display.innerText = result.name;
});
