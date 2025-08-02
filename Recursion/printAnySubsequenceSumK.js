
let list = [2, 3, 1, 4, 5, 6, 7, 8, 9, 10];
const arr = []
const k = 10;
let count=0;
function printAnySubSequenceSumK(i, arr, sum) {

    if (i == list.length) {
        if (sum == k) {
            console.log(arr);
            count++;
            return true;
        }
        return false

    }


    arr.push(list[i]);
    sum = sum + list[i];
    if (printAnySubSequenceSumK(i + 1, arr, sum)) {
        return true;
    }
    arr.pop();
    sum = sum - list[i];
    if (printAnySubSequenceSumK(i + 1, arr, sum)) {
        return true;
    }


    return false;

}

printAnySubSequenceSumK(0, arr, 0);
console.log(count);


