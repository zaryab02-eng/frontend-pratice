const numGrtrThnTen = (arr) => {
  return arr.reduce((count, num) => (num > 10 ? count + 1 : count), 0);
};

console.log(numGrtrThnTen([5, 12, 18, 7, 20]));
