const numGrtThnThree = (arr) => {
  return arr.reduce((count, num) => (num > 3 ? count + 1 : count), 0);
};

console.log(numGrtThnThree([1, 4, 2, 6, 3, 7]));
