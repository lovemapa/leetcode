const arr = [1, 6, 4, 1, 12];



function equalSumPartition(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    if (sum % 2 !== 0) {
        return false;
    }
    else {
        let newSum = sum / 2;

        return calculateSubsetSum(arr, newSum)
    }

}

function calculateSubsetSum(arr, sum) {
    const arrlength = arr.length;
    const matrix = Array.from(Array(arrlength + 1), () => Array(sum + 1).fill(false));

    console.log(matrix);

    for (let i = 0; i <= arrlength; i++) {
        matrix[i][0] = true;
    }

    const val = subsetSum(sum, arr, arrlength, matrix);
    return val;

}

function subsetSum(sum, arr, arrlength, matrix) {
    for (let i = 1; i < arrlength + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (arr[i - 1] <= j) {
                matrix[i][j] = matrix[i - 1][j - arr[i - 1]] || matrix[i - 1][j];
            } else {
                matrix[i][j] = matrix[i - 1][j];
            }
        }
    }

    console.log(arrlength, sum);

    return matrix[arrlength][sum];
}

console.log(equalSumPartition(arr));
