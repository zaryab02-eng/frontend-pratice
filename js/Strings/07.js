const isPalindrome = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  if (reversed === str) {
    return `${str} is a Palindrome`;
  } else {
    return `${str} is not a Palindrome`;
  }
};

console.log(isPalindrome("code"));
