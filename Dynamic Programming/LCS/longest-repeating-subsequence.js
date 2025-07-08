const string1 = "aab";
const string2 = string1;;

const strlen1 = string1.length;
const strlen2 = string2.length;



const memoizedTopDownArr = Array.from({ length: strlen1 + 1 }, (e) => new Array(strlen2 + 1).fill(-1));

for (let i = 0; i < strlen1 + 1; i++) {
    memoizedTopDownArr[i][0] = 0;
}

for (let i = 0; i < strlen2 + 1; i++) {
    memoizedTopDownArr[0][i] = 0;
}

function LCSTopDown(string1, string2, strlen1, strlen2, memoizedTopDownArr) {


    for (let i = 1; i < strlen1 + 1; i++) {
        for (let j = 1; j < strlen2 + 1; j++) {
            if (string1[i - 1] == string2[j - 1] && i!==j) {
                memoizedTopDownArr[i][j] = 1 + memoizedTopDownArr[i - 1][j - 1];
            }
            else {
                memoizedTopDownArr[i][j] = Math.max(memoizedTopDownArr[i - 1][j], memoizedTopDownArr[i][j - 1]);

            }
        }
    }

    return memoizedTopDownArr[strlen1][strlen2]
}

console.log(LCSTopDown(string1, string2, strlen1, strlen2, memoizedTopDownArr))



