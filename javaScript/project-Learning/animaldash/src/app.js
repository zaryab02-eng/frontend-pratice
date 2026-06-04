const allBtn = document.getElementById("allBtn");
const dangBtn = document.getElementById("dangBtn");
const safeBtn = document.getElementById("safeBtn");
const display = document.getElementById("display");

const animals = [
  { name: "Lion", danger: true, legs: 4 },
  { name: "Rabbit", danger: false, legs: 4 },
  { name: "Tiger", danger: true, legs: 4 },
  { name: "Spider", danger: false, legs: 8 },
];

allBtn.addEventListener("click", () => {
  const allRslt = animals.map((animal) => {
    return animal.name;
  });
  display.innerText = allRslt;
});

dangBtn.addEventListener("click", () => {
  const dangRslt = animals.filter((animal) => {
    return animal.danger;
  });
  display.innerText = dangRslt.map((animal) => animal.name);
});

safeBtn.addEventListener("click", () => {
  const safeRslt = animals.filter((animal) => {
    return animal.danger === false;
  });
  display.innerText = safeRslt.map((animal) => animal.name);
});
