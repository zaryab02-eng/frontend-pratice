const user = {
  name: "Ali",
};

const { name, age = 18 } = user;

console.log(name, age);
