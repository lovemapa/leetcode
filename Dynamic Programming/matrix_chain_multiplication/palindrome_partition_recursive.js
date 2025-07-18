const s = 'abcb';

const i = 0;
const j = s.length - 1;


function palindromePartiotion(s, i, j) {
    if (i >= j) {
        return 0;
    }
    
    if (isPalindrome(s, i, j)) {
        return 0;
    }
    
    let min = Number.MAX_SAFE_INTEGER;
    for (let k = i; k <= j - 1; k++) {

        let temp = palindromePartiotion(s, i, k) + palindromePartiotion(s, k + 1,j) + 1;

        if (temp<min) {
            min = temp;
        }

    }
    return min;

}

function isPalindrome(s, i, j) {

    if (s.length == 0) {
        return true;
    }

    while (i <= j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(palindromePartiotion(s, i, j));
