const smallest = (arr) => {
  let smallestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
};

console.log(smallest([8, 3, 6, 2, 9]));
