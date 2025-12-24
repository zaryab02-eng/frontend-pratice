const countOdd = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count += 1;
    }
  }
  return count;
};

console.log(countOdd([1, 2, 3, 4, 5]));
