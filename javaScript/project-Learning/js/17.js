const nums = [10, 20, 30];

const total = nums.reduce((current, num) => {
  return (current = current + num);
}, 0);

console.log(total);
