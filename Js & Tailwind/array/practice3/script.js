const ages = [16, 22, 17, 25, 14, 30];

const result = ages
  .filter((age) => age >= 18)
  .map((age) => {
    return `Voter: ${age} years old`;
  });

console.log(result);
