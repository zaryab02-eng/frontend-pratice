let arr = [12, 5, 8, 2, 20];
let smallestNum = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallestNum) {
    smallestNum = arr[i];
  }
}

console.log(smallestNum);
