const sumOfEvenNums = (arr) => {
  return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
};

console.log(sumOfEvenNums([1, 2, 3, 4, 5, 6]));
