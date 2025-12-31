const countA = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  return count;
};

console.log(countA("javascript"));
