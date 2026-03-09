let arr = [2, 4, 2, 7, 2, 9, 4];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    count++;
  }
}

console.log(count);
