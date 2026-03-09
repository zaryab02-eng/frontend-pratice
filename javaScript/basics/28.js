let arr = [3, 6, 2, 7, 8, 5];
let evenSum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenSum = evenSum + arr[i];
  }
}

console.log(evenSum);
