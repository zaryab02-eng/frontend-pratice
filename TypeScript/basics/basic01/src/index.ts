// function formatId(id: string | number): string {
//   if (typeof id === "string") {
//     return `ID:${id}`;
//   } else {
//     return `ID:${id}`;
//   }
// }

// console.log(formatId(101));

// console.log(formatId("EMP-101"));

interface Employee {
  name: string;
  salary: number;
}

interface Manager {
  name: string;
  teamSize: number;
}

function getRole(person: Employee | Manager): string {
  if ("salary" in person) {
    return "Employee";
  } else {
    return "Manager";
  }
}

console.log(getRole({ name: "Zaryab", teamSize: 5 }));
console.log(getRole({ name: "Ali", salary: 4500 }));
