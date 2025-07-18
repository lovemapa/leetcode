let str = 'T^T^T^F|F&F^F|T^F^T'
const i = 0;
const j = str.length - 1;

let dp = new Map();

function evaluate(str, i, j, isTrue) {
    if (i > j) {
        return 0;
    }
    if (i === j) {
        if (isTrue == 1) {
            return str[i] == 'T' ? 1 : 0;
        }
        else {
            return str[i] == 'F' ? 1 : 0;;
        }
    }
    const key = `${i}_${j}_${isTrue}`

    if (dp.has(key)) {
        return dp.get(key);
    }
    let ans = 0;

    for (let k = i + 1; k <= j - 1; k = k + 2) {
        const leftTrue = evaluate(str, i, k - 1, 1);
        const rightTrue = evaluate(str, k + 1, j, 1);
        const leftFalse = evaluate(str, i, k - 1, 0);
        const rightFalse = evaluate(str, k + 1, j, 0);


        if (str[k] === '&') {
            if (isTrue) {
                ans = ((ans) % 1003 + (leftTrue * rightTrue) % 1003) % 1003;
            }
            else {
                ans = ((ans) % 1003 + (leftTrue * rightFalse) % 1003 + (leftFalse * rightTrue) % 1003 + (rightFalse * leftFalse) % 1003) % 1003;
            }
        }
        else if (str[k] === '^') {
            if (isTrue) {
                ans = ((ans) % 1003 + (leftTrue * rightFalse) % 1003 + (leftFalse * rightTrue) % 1003) % 1003;
            }
            else {
                ans = ((ans) % 1003 + (leftTrue * rightTrue) % 1003 + (leftFalse * rightFalse) % 1003) % 1003;
            }
        }
        else {
            if (isTrue) {
                ans = ((ans) % 1003 + (leftTrue * rightFalse) % 1003 + (leftFalse * rightTrue) % 1003 + (leftTrue * rightTrue) % 1003) % 1003;
            }
            else {
                ans = ((ans) % 1003 + (leftFalse * rightFalse) % 1003) % 1003;
            }
        }

    }

    dp.set(key, ans);
    return ans;
}

console.log(evaluate(str, i, j, 1));
