function palindrome(str, index, path, len, result) {

    if (index == len) {
        result.push([...path])
        return;
    }

    for (let i = index; i < len; i++) {

        if (isPalindrome(str, index,i)) {
            path.push(str.substring(index,i+1));
            palindrome(str,i+1,path,len,result);
            path.pop()
        }
    }


}

function main() {

    let str = 'aab';
    let result = [];
    let path = [];
    palindrome(str, 0, path, str.length, result);
    console.log(result);

}

main()

function isPalindrome(string, start, end) {



    while (start < end) {
        if (string[start] != string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;

}

