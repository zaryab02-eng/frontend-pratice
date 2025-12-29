const countGreaterThanFive = (arr) => {
  return arr.reduce((count, num) => {
    return num > 5 ? (count = count + 1) : count;
  }, 0);
};

console.log(countGreaterThanFive([1, 6, 8, 3, 10]));
