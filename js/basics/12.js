const countGreaterThanTen = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      count += 1;
    }
  }
  return count;
};

console.log(countGreaterThanTen([5, 12, 18, 7, 20]));
