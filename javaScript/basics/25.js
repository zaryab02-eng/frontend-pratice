let arr = [4, 11, 7, 18, 2, 25, 9];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    count++;
  }
}

console.log(count);
