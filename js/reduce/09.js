const grtrThnHundrf = (arr) => {
  return arr.reduce((count, num) => (num > 100 ? count + 1 : count), 0);
};

console.log(grtrThnHundrf([50, 120, 99, 300, 101]));
