
const s1 = 'abcd';
const s2 = "bdac";

const dp = new Map();

function isScramble(s1, s2) {


    let key = `${s1}_${s2}`

    if (dp.has(key)) {
        return dp.get(key)
    }

    if (s1 === s2) {
        dp.set(key, true);
        return true;
    }
    if (s1.length !== s2.length) {
        dp.set(key, false);
        return false;
    }

    const n = s1.length;


    // Early pruning: check if they have the same character counts
    const sorted1 = [...s1].sort().join('');
    const sorted2 = [...s2].sort().join('');
    if (sorted1 !== sorted2) {
        dp.set(key, false);
        return false;
    }

    for (let i = 1; i <= n - 1; i++) {

        // Case 1: without swap
        if (
            isScramble(s1.substring(0, i), s2.substring(0, i)) &&
            isScramble(s1.substring(i), s2.substring(i))
        ) {
            dp.set(key, true);
            return true;
        }

        // Case 2: with swap
        if (
            isScramble(s1.substring(0, i), s2.substring(n - i)) &&
            isScramble(s1.substring(i), s2.substring(0, n - i))
        ) {
            dp.set(key, true);
            return true;
        }
    }

    dp.set(key, false);
    return false;
}

console.log(isScramble(s1, s2)); // true
