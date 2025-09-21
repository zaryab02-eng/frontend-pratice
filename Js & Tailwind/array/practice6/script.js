const employees = [
  { name: "Alex", salary: 45000, remote: true },
  { name: "Beth", salary: 70000, remote: false },
  { name: "Carl", salary: 55000, remote: false },
  { name: "Dana", salary: 80000, remote: true },
];

// Expected:
// ["Alex works remotely", "Beth earns $70000", "Dana works remotely"]
// (Carl doesn't meet either condition)

const result = employees.map((employe) => {
  if (employe.remote === true) {
    return `${employe.name} works remotely`;
  } else if (employe.salary > 60000) {
    return `${employe.name} earns ${employe.salary}`;
  } else if (employe.remote === false && employe.salary < 60000) {
    return `${employe.name} doesn't meet either condition`;
  }
});

console.log(result);
