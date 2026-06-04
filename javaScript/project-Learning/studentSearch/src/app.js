const display = document.getElementById("display");
const input = document.getElementById("input");
const search = document.getElementById("srchBtn");

const students = [
  { name: "Ali", marks: 85 },
  { name: "Ahmed", marks: 45 },
  { name: "Zaryab", marks: 92 },
  { name: "Usman", marks: 30 },
];

search.addEventListener("click", () => {
  const searchName = input.value.trim().toLowerCase();
  const result = students.find((student) => {
    return student.name.toLowerCase() === searchName;
  });
  if (result) {
    display.innerText = `${result.name} - ${result.marks}`;
  } else {
    display.innerText = `No student found`;
  }
});
