// let s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]];

let s = "abcd";
let newS = "";

let k = 2;

let left = 0;
let right = s.length - 1;

let count = 0;
while (count < k) {
  if (s[left] != s[right]) {
    console.log(s[left], s[right]);
    newS[left] = newS[right];
  }

  count++;
  left++;
  right--;
}

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
console.log(newS, checkIfPalindrome(newS));

// const canMakePaliQueries = function(s, queries) {

// };
