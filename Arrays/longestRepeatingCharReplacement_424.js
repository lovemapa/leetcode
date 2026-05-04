// optmized , had to look for while case
function main() {
    let s = "BAAA", k = 2

    let map = new Map();

    let l = 0;

    let maxFrequency = 0;
    let maxLength = 0;
    for (let r = 0; r < s.length; r++) {

        map.set(s[r], (map.get(s[r]) || 0) + 1);

        maxFrequency = Math.max(maxFrequency, map.get(s[r]));

        while ((r - l + 1) - maxFrequency> k) {
            map.set(s[l], map.get(s[l]) - 1);
            l++;
        }
        maxLength = Math.max(maxLength, r - l + 1);

    }
    return maxLength;

}

// suboptimzed done by myself;
let characterReplacement = function (s, k) {
    let map = new Map();

    let l = 0;

    let maxFrequency = 0;
    let maxLength = 0;
    for (let r = 0; r < s.length; r++) {

        map.has(s[r]) ? map.set(s[r], map.get(s[r]) + 1) : map.set(s[r], 1);

        maxFrequency = Math.max(maxFrequency, map.get(s[r]));
        let numberOfChanges = (r - l + 1) - maxFrequency;
        if (numberOfChanges <= k) {
            maxLength = Math.max(maxLength, r - l + 1);
        }
        else {
            map.set(s[l], map.get(s[l]) - 1);
            l++;
            maxLength = Math.max(maxLength, r - l + 1);
        }

    }
    return maxLength;

};


console.log(main());
