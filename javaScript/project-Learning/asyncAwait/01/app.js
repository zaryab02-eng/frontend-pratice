// const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");

// const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");

const [userResponse, postResponse] = await Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users"),
  fetch("https://jsonplaceholder.typicode.com/posts"),
]);
