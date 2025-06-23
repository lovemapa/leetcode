let string1 = 'abcde';
let string2 = 'ace';

const str1Len = string1.length;
const str2Len = string2.length;

let t= Array.from({length:str1Len+1},e=>new Array(str2Len+1).fill(-1))

console.log(t);


function LCS(string1, string2, str1Len, str2Len) {

    if (str1Len == 0 || str2Len == 0) {
        return 0;
    }
    if(t[str1Len][str2Len]!==-1){
        return t[str1Len][str2Len];
    }

    if (string1[str1Len-1]==string2[str2Len-1]) {

        t[str1Len][str2Len]= 1+LCS(string1, string2, str1Len-1, str2Len-1);
        return t[str1Len][str2Len];
    }
    else {

        t[str1Len][str2Len]= Math.max(LCS(string1, string2, str1Len - 1, str2Len), LCS(string1, string2, str1Len, str2Len - 1));
        return t[str1Len][str2Len];
    }


}

console.log(LCS(string1, string2, str1Len, str2Len));
