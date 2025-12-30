const oddNum = (arr) => {
  return arr.reduce((odd, num) => (num % 2 !== 0 ? odd + 1 : odd), 0);
};

console.log(oddNum([1, 2, 3, 4, 5, 7]));
