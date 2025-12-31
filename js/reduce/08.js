const belowZero = (arr) => {
  return arr.reduce((count, num) => (num < 0 ? count + 1 : count), 0);
};

console.log(belowZero([-2, 5, -1, 0, 7, -9]));
