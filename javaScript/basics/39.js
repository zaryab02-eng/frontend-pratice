const user = {
  name: "Ali",
};

const { name: username, age = 18 } = user;

console.log(username, age);
