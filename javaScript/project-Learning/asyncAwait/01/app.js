// const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");

// const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");

// const [userResponse, postResponse] = await Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/users"),
//   fetch("https://jsonplaceholder.typicode.com/posts"),
// ]);

import greet, { square } from "./math.js";

console.log(greet("Zaryab"));
console.log(square(3));
