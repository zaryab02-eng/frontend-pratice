const numGrtThnFive = (arr) => {
  let num = 5;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      count += 1;
    }
  }
  return count;
};

console.log(numGrtThnFive([1, 6, 8, 3, 10]));
