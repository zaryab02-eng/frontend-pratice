// const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");

// const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");

// const [userResponse, postResponse] = await Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/users"),
//   fetch("https://jsonplaceholder.typicode.com/posts"),
// ]);

// import greet, { square } from "./math.js";

// console.log(greet("Zaryab"));
// console.log(square(3));

// const nums = [10, 20, 30];
// console.log(nums);
// console.log(...nums);

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2);

// const numbers = [5, 10, 15];
// const num2 = [...numbers, 20];
// console.log(num2);

// const user = {
//   name: "Zaryab",
//   age: 20,
// };

// const updatedUser = {
//   ...user,
//   age: 21,
// };
// console.log(updatedUser);

// function total(...nums) {
//   return nums.reduce((current, num) => current + num, 0);
// }
// console.log(total(10, 20, 30, 40));

function report(name, ...scores) {
  console.log(name);
  scores.forEach((score) => {
    console.log(score);
  });
}

report("Zaryab", 90, 95, 98);
