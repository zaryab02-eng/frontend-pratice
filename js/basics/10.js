const numGrtrThnThree = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(numGrtrThnThree([1, 4, 2, 6]));
