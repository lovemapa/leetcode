let string1 = "abc";
let string2 = 'def';


const str1Len = string1.length;
const str2Len = string2.length;

let str=''
function longestCommonSubSequence(string1, string2, str1Len, str2Len) {

    if (str1Len == 0 || str2Len == 0)
        return 0;

    if (string1[str1Len - 1] == string2[str2Len - 1]) {
        return 1 + longestCommonSubSequence(string1, string2, str1Len - 1, str2Len - 1);
    }
    else {
        return Math.max(longestCommonSubSequence(string1, string2, str1Len - 1, str2Len), longestCommonSubSequence(string1, string2, str1Len, str2Len - 1))
    }


}

console.log(longestCommonSubSequence(string1,string2,str1Len,str2Len));
