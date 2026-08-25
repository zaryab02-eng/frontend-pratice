"use strict";
// function formatId(id: string | number): string {
//   if (typeof id === "string") {
//     return `ID:${id}`;
//   } else {
//     return `ID:${id}`;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
function getRole(person) {
    if ("salary" in person) {
        return "Employee";
    }
    else {
        return "Manager";
    }
}
console.log(getRole({ name: "Zaryab", teamSize: 5 }));
console.log(getRole({ name: "Ali", salary: 4500 }));
//# sourceMappingURL=index.js.map