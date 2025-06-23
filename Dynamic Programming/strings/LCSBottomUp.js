let string1 = "one"
let string2 = "longest"

const str1Len = string1.length;
const str2Len = string2.length;

const t = Array.from({ length: str1Len + 1 }, (e) => new Array(str2Len + 1).fill(0));



function LCS(string1, string2, str1Len, str2Len, t) {
    for (let i = 1; i < str1Len + 1; i++) {
        for (let j = 1; j < str2Len + 1; j++) {

            if (string1[i-1] === string2[j-1]) {
                t[i][j] = 1 + t[i - 1][j - 1];
            }
            else {

                t[i][j] = Math.max(t[i - 1][j], t[i][j - 1])

            }
        }
    }
    return t[str1Len][str2Len]
}


console.log(LCS(string1, string2, str1Len, str2Len, t));
