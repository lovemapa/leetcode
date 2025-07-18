const matrixArr =[10, 30, 5 ,60];

const dp= Array.from({length:matrixArr.length+1},(e)=>Array(matrixArr.length+1).fill(-1));

const i = 1;
const j = matrixArr.length - 1;

function MCMTopdown(matrixArr, i, j) {

    if (i >= j) {
        return 0;
    }

    if(dp[i][j]!=-1){
       return dp[i][j]; 
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let k = i; k <= j - 1; k++) {

        let temp = MCMTopdown(matrixArr, i, k) + MCMTopdown(matrixArr, k + 1, j) + matrixArr[i - 1] * matrixArr[k] * matrixArr[j];

        if (temp < min) {
            min = temp;
        }

    }

     dp[i][j]=min;
     return dp[i][j];
}


console.log(MCMTopdown(matrixArr, i, j));
