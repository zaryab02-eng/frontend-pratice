let arr = [3, 8, 11, 6, 4, 7, 10];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    count++;
  }
}

console.log(count);
