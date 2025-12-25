const getEvenNumbers = (arr) => {
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    }
  }
  return evenNum;
};

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
