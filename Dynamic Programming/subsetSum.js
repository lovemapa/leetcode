const arr = [3,9,7,3];
let sum = 0;

for(let s=0;s<arr.length;s++){
  sum=sum+arr[s];
}

const arrlength = arr.length;
const matrix = Array.from(Array(arrlength + 1), () => Array(sum + 1).fill(false));


for (let i = 0; i <= arrlength; i++) {
  matrix[i][0] = true;
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

const val = subsetSum(sum, arr, arrlength, matrix);