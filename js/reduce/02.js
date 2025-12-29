const sumArray = (arr) => {
  return arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

console.log(sumArray([1, 2, 3, 4, 5, 6]));
