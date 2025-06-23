const string1 = "abcde";
const string2 = "ace";
const strlen1 = string1.length;
const strlen2 = string2.length;

const memoizedArr = Array.from({ length: strlen1 + 1 }, (e) => new Array(strlen2 + 1).fill(-1));

for (let i = 0; i < strlen1 + 1; i++) {
    memoizedArr[i][0] = 0;
}

for (let i = 0; i < strlen2 + 1; i++) {
    memoizedArr[0][i] = 0;
}

function LCSMemoized(string1, string2, strlen1, strlen2, memoizedArr) {

    if (strlen1 == 0 || strlen2 == 0) {
        return 0;
    }

    if (memoizedArr[strlen1][strlen2] !== -1) {


        return memoizedArr[strlen1][strlen2]
    }

    if (string1[strlen1 - 1] == string2[strlen2 - 1]) {

        return memoizedArr[strlen1][strlen2] = 1 + LCSMemoized(string1, string2, strlen1 - 1, strlen2 - 1, memoizedArr);

    }
    else {
        return memoizedArr[strlen1][strlen2] = Math.max(
            LCSMemoized(string1, string2, strlen1 - 1, strlen2, memoizedArr),
            LCSMemoized(string1, string2, strlen1, strlen2 - 1, memoizedArr))
    }

}


console.log(LCSMemoized(string1, string2, strlen1, strlen2, memoizedArr));
