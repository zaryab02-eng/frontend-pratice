const getGreaterThan = (arr, value) => {
  return arr.filter((num) => num > value);
};

console.log(getGreaterThan([5, 12, 18, 7, 20], 10));
