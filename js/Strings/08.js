const countWords = (str) => {
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }

  return count;
};

console.log(countWords("i love javascript"));
