const button = document.getElementById("showActiveBtn");
const display = document.getElementById("activeDisplay");

let employees = [
  { name: "John", status: "active" },
  { name: "Jane", status: "inactive" },
  { name: "Mike", status: "active" },
  { name: "Sara", status: "inactive" },
  { name: "Tom", status: "active" },
];

button.addEventListener("click", () => {
  const activeEm = employees.filter((employe) => {
    return employe.status === "active";
  });

  const inactiveEm = employees.filter((employe) => {
    return employe.status === "inactive";
  });

  const result = activeEm.map((employe) => {
    return `${employe.name} is Active`;
  });

  const resultTwo = inactiveEm.map((employe) => {
    return `${employe.name} is Inactive`;
  });

  display.innerHTML = [...result, ...resultTwo].join("<br>");
});
