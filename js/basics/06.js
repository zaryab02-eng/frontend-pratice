const evenNums = (arr) => {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
};

console.log(evenNums([1, 2, 3, 4, 6]));
