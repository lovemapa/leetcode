//

function optimal() {
    const s = "abcabcbb"
    let stringArr = new Array();

    if (s.length === 0)
        return 0;
    for (let i = 0; i < s.length; i++) {
        stringArr[i] = s[i];
    }

    if (stringArr.length == 1)
        return 1;

    let maxCount = 0;
    let l = 0;

    let map = new Map();
    for (let r = 0; r < stringArr.length; r++) {

        if (map.has(stringArr[r])) {
            if (map.get(stringArr[r]) >= l) {
                l = map.get(stringArr[r]) + 1;
            }

        }
        map.set(stringArr[r], r)
        maxCount = Math.max(r - l + 1, maxCount);
    }

    return maxCount

}

// suboptimal
function suboptimal() {
    const s = "au"
    let stringArr = new Array();

    if (s.length === 0)
        return 0;
    for (let i = 0; i < s.length; i++) {
        stringArr[i] = s[i];
    }

    if (stringArr.length == 1)
        return 1;

    let maxCount = 0;
    let l = 0, r = 0;

    let map = new Map();
    while (r < stringArr.length) {
        if (map.has(stringArr[r])) {
            if (map.get(stringArr[r]) >= l) {
                l = map.get(stringArr[r]) + 1;

            }
            map.set(stringArr[r], r)
            maxCount = Math.max(r - l + 1, maxCount);
            r++;
        } else {
            map.set(stringArr[r], r);
            maxCount = Math.max(r - l + 1, maxCount);
            r++;
        }
    }
    return maxCount

}


// brute
function main() {
    const s = "pwwkew"
    let stringArr = new Array();

    if (s.length === 0)
        return 0;
    for (let i = 0; i < s.length; i++) {
        stringArr[i] = s[i];
    }


    let maxCount = 0;

    for (let slow = 0; slow < stringArr.length; slow++) {

        let map = new Map();
        map.set(stringArr[slow]);

        let fast = slow + 1;
        let count = 1;
        while (!map.has(stringArr[fast]) && fast < stringArr.length && slow < fast) {
            map.set(stringArr[fast]);
            fast++;
            count++;
        }
        maxCount = Math.max(maxCount, count)
    }

    return maxCount

}

console.log(main());

