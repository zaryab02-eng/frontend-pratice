let arr = [4, 9, 2, 15, 6, 3];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
