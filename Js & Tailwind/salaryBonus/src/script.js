const display = document.getElementById("bonusDisplay");
const button = document.getElementById("showBonusBtn");

let employees = [
  { fullname: "Amit", experience: 2 },
  { fullname: "Sita", experience: 5 },
  { fullname: "Rohan", experience: 1 },
];

button.addEventListener("click", () => {
  const bonus = employees.map((employe) => {
    if (employe.experience >= 5) {
      return `${employe.fullname}: Senior Level - $5000 bonus`;
    } else if (employe.experience >= 2 && employe.experience < 5) {
      return `${employe.fullname}: Mid Level - $2000 bonus`;
    } else {
      return `${employe.fullname}: Junior Level - $500 bonus`;
    }
  });
  display.innerHTML = bonus.join("<br>");
});
