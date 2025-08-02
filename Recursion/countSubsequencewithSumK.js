let list = [2, 3, 1, 4, 5, 6, 7, 8, 9, 10];
const arr = []
const k = 50;

let count=0;
function countSubsequenceSumK(i, arr, sum) {
    if (i == list.length) {
        if (sum == k) {
            count++;
        }
        return
    }

    arr.push(list[i]);
    sum = sum + list[i];
    countSubsequenceSumK(i + 1, arr, sum);
    arr.pop()
    sum = sum - list[i];
    countSubsequenceSumK(i + 1, arr, sum);


}

countSubsequenceSumK(0, arr, 0)
console.log(count);
