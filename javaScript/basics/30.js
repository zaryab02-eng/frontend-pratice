let arr = [1, 2, 3, 2, 4, 5, 3];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log(arr[i]);
    }
  }
}
