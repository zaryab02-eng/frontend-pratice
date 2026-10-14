function getLast<T>(item: T[]): T | undefined {
  return item[item.length - 1];
}

console.log(getLast([10, 20, 30]));
console.log(getLast(["Ali", "Sara", "Ahmed"]));
