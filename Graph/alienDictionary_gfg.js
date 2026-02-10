function main() {
    const mapper = {
        a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7,
        i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14,
        p: 15, k: 16, r: 17, s: 18, t: 19, u: 20, v: 21,
        w: 22, x: 23, y: 24, z: 25
    }

    const adjacencyList = Array.from({ length: 27 }, e => []);

    const words = ["ab", "cd", "ef", "ad"];

    const wordsLen = words.length;
    for (let i = 0; i < wordsLen - 1; i++) {
        compareStrings(words[i], words[i + 1], adjacencyList, mapper)
    }

}

function compareStrings(str1, str2, adjacencyList, mapper) {

    const str1len = str1.length;
    const str2len = str2.length;

    let i = 0, j = 0;

    while (i < str1len && j < str2len) {
        if (str1[i] !== str2[j]) {            
            adjacencyList[mapper[str1[i]]].push(mapper[str2[j]]);
            return;
        }
        i++;
        j++;
    }

}

main()