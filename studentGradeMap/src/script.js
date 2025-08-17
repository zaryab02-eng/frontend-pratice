const display = document.getElementById("gradesDisplay");
const button = document.getElementById("showGradesBtn");

let students = [
  { fullname: "Raj", marks: 85 },
  { fullname: "Priya", marks: 92 },
  { fullname: "Arjun", marks: 76 },
];

button.addEventListener("click", () => {
  const grade = students.map((student) => {
    if (student.marks >= 90) {
      return `${student.fullname}: A Grade`;
    } else if (student.marks >= 80) {
      return `${student.fullname}: B Grade`;
    } else {
      return `${student.fullname}: C Grade`;
    }
  });
  display.innerHTML = grade.join("<br>");
});
