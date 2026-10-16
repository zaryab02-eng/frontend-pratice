"use strict";
// function getLast<T>(item: T[]): T | undefined {
//   return item[item.length - 1];
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(getLast([10, 20, 30]));
// console.log(getLast(["Ali", "Sara", "Ahmed"]));
// function makeEntry<T, V>(id: T, value: V): [T, V] {
//   return [id, value];
// }
// console.log(makeEntry(101, "Laptop"));
// console.log(makeEntry("user-1", true));
function getItemName(item) {
    return item.name;
}
console.log(getItemName({ name: "Laptop", price: 50000 }));
console.log(getItemName({ name: "Mouse", inStock: true }));
//# sourceMappingURL=index.js.map