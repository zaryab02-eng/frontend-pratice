const maxNum = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(maxNum([3, 2, 5, 7, 4, 2, 9, 4]));
