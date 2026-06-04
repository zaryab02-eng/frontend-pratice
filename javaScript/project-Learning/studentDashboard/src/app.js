const showAll = document.getElementById("allBtn");
const psdBtn = document.getElementById("passed");
const fldBtn = document.getElementById("failed");
const tprBtn = document.getElementById("topper");
const display = document.getElementById("display");

const students = [
  { name: "Ali", marks: 85 },
  { name: "Ahmed", marks: 45 },
  { name: "Zaryab", marks: 92 },
  { name: "Usman", marks: 30 },
];

showAll.addEventListener("click", () => {
  const result = students.map((student) => {
    return student.name;
  });
  display.innerText = result;
});

psdBtn.addEventListener("click", () => {
  const result = students.filter((student) => {
    return student.marks >= 50;
  });
  display.innerText = result.map((student) => {
    return student.name;
  });
});

fldBtn.addEventListener("click", () => {
  const result = students.filter((student) => {
    return student.marks < 50;
  });
  display.innerText = result.map((student) => {
    return student.name;
  });
});

tprBtn.addEventListener("click", () => {
  let topper = students[0];
  for (const student of students) {
    if (student.marks > topper.marks) {
      topper = student;
    }
  }
  display.innerText = topper.name;
});
