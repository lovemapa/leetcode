const string1 = "abcde";
const string2 = "ace";

const strlen1 = string1.length;
const strlen2 = string2.length;


function LCS(string1, string2, strlen1, strlen2) {

    if (strlen1 == 0 || strlen2 == 0) {
        return 0;
    }

    if (string1[strlen1 - 1] == string2[strlen2 - 1]) {

        return 1 + LCS(string1, string2, strlen1 - 1, strlen2 - 1);
    }
    else {

        return Math.max(LCS(string1, string2, strlen1 - 1, strlen2), LCS(string1, string2, strlen1, strlen2 - 1))
    }

}

console.log(LCS(string1, string2, strlen1, strlen2));
