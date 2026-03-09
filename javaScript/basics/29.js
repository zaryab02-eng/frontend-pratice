let arr = [10, 5, 8, 20, 15];
let largest = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    second = largest;
    largest = arr[i];
  } else if (arr[i] > second && arr[i] < largest) {
    second = arr[i];
  }
}

console.log(second);
