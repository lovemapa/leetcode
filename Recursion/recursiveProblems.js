
function sumOfN(n, N, count) {
    if (n > N) {
        console.log(count);
        return;
    }
    count = count + n;
    n++;
    sumOfN(n, N, count);
}
// sumOfN(1, 4, 0);


function functionalized(n) {
    if (n == 1) {
        return 1;
    }
    return n + functionalized(n - 1);
}


function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
// console.log(factorial(5));


let arr = [1, 23, 4, 89, 0];
const len = arr.length;

function reverseArrayTwoPointer(l, r) {

    if (l >= r) {
        return;
    }

    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    reverseArrayTwoPointer(l + 1, r - 1);

}
// reverseArrayTwoPointer(0, len - 1);


function reverseSinglePointer(i) {

    if (i >= parseInt(arr.length / 2))
        return;

    let temp = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arr[i];
    arr[i] = temp;

    reverseSinglePointer(i + 1);

}

// reverseSinglePointer(0);
// console.log(arr);

const str = 'ab'
function isPalindromeTwoPointers(l, r) {

    if (l >= r) {
        return true;
    }
    if (str[l] != str[r]) {
        return false;
    }

    return isPalindrome(l + 1, r - 1);


}


function isPalindromeOnePointer(i) {

    if (i >= parseInt(str.length / 2)) {
        return true;
    }

    if (str[i] != str[str.length - i - 1]) {
        return false;
    }

    return isPalindromeOnePointer(i + 1);
}



// console.log(isPalindromeOnePointer(0));

function fibonacciI(n) {

    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    return fibonacciI(n - 1) + fibonacciI(n - 2);

}

// console.log(fibonacciI(7));
let list = [];
let input = [3, 1, 2]
function powerSeries(i, list) {
    if (i >= input.length) {
        console.log(list);
        return;
    }

    list.push(input[i]);
    powerSeries(i + 1, list);
    list.pop();
    powerSeries(i + 1, list);

}


powerSeries(0,list)