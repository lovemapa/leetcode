
let list = [2, 3, 1, 4, 5, 6, 7, 8, 9, 10];
const arr = []
const k = 15;

function printSubSequenceSumK(i, arr, sum) {

    if (i == list.length) {
        if (sum == k) {
            console.log(arr);
        }
        return;
    }

    arr.push(list[i]);
    sum = sum + list[i];
    printSubSequenceSumK(i + 1, arr, sum);
    arr.pop();
    sum = sum - list[i];
    printSubSequenceSumK(i + 1, arr, sum);

}

printSubSequenceSumK(0, arr, 0);