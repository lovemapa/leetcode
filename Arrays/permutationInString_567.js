//
function optimal() {
    const s1 = "ab", s2 = "eidboaoo";
 
    if (s1.length > s2.length) return false;
 
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);
 
    // build freq for s1
    for (let i = 0; i < s1.length; i++) {
        freq1[s1.charCodeAt(i) - 97]++;
        freq2[s2.charCodeAt(i) - 97]++;
    }
 
    // helper to compare arrays
    const isEqual = () => {
        for (let i = 0; i < 26; i++) {
            if (freq1[i] !== freq2[i]) return false;
        }
        return true;
    };
 
    if (isEqual()) return true;
 
    // sliding window
    for (let r = s1.length; r < s2.length; r++) {
        freq2[s2.fromCodePoint(r) - 97]++; // add new
        freq2[s2.fromCodePoint(r - s1.length) - 97]--; // remove old
 
        if (isEqual()) return true;
    }
 
    return false;
}



function main() {
    const s1 = "ab", s2 = "eidbaooo";

    let S1Map = new Map();
    let S2Map = new Map();
 
    // initialize maps
    for (let i = 0; i < 26; i++) {
        const ch = String.fromCodePoint(97 + i);
        S1Map.set(ch, 0);
        S2Map.set(ch, 0);
    }
 
    // fill S1 frequency
    for (const char of s1) {
        S1Map.set(char, S1Map.get(char) + 1);
    }
 
    let l = 0;
 
    for (let r = 0; r < s2.length; r++) {

        S2Map.set(s2[r], S2Map.get(s2[r]) + 1);

        if (r - l + 1 > s1.length) {
            S2Map.set(s2[l], S2Map.get(s2[l]) - 1);
            l++;
        }
 
        if (r - l + 1 === s1.length) {
            if (JSON.stringify([...S1Map]) === JSON.stringify([...S2Map])) {
                return true;
            }
        }
    }
 
    return false;


}

console.log(main());
