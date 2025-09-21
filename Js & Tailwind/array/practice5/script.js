const users = [
  { name: "alice", age: 25, active: true, role: "admin" },
  { name: "bob", age: 17, active: false, role: "user" },
  { name: "charlie", age: 30, active: true, role: "user" },
  { name: "diana", age: 22, active: true, role: "admin" },
];

const result = users
  .filter((user) => user.active === true && user.age >= 18)
  .map((user) => {
    return `${user.name.toUpperCase()} (${user.role.toUpperCase()})`;
  });

console.log(result);
