function checkIfPalindrome(string) {
  let start = 0;
  let end = string.length - 1;

  if (string.length == 1) return true;

  while (start < end) {
    if (string[start].toLowerCase() != string[end].toLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  return true;
}

console.log(checkIfPalindrome("raceCar"));
