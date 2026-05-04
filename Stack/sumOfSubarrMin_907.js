class Stack {
    constructor() {
        this.arr = [];
    }

    push(elem) {
        this.arr.push(elem);
    }

    pop() {
        if (this.arr.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.arr.pop();
    }

    top() {
        if (this.arr.length === 0) return undefined;
        return this.arr.at(-1);
    }

    size() {
        return this.arr.length;
    }
}

function main() {
    let arr = [71, 55, 82, 55]

    let total = 0;
    let mod = Math.pow(10, 9) + 7;

    const PSE = findPSE(arr);
    const NSE = findNSE(arr);
    for (let i = 0; i < arr.length; i++) {

        let left = i - PSE[i];
        let right = NSE[i] - i;
        total = (total + (left * right * arr[i]) % mod) % mod;
    }


    return total;
}

function findPSE(arr) {
    const s = new Stack();

    const pse = [];
    for (let i = 0; i < arr.length; i++) {
        while (s.size() > 0 && arr[i] <= arr[s.top()]) {
            s.pop();
        }
        pse[i] = s.size() === 0 ? -1 : s.top();
        s.push(i);

    }
    return pse;

}

function findNSE(arr) {
    const s = new Stack();

    const nse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (s.size() > 0 && arr[i] <arr[s.top()]) {
            s.pop();
        }
        nse[i] = s.size() === 0 ? arr.length : s.top();
        s.push(i);

    }

    return nse;
}

console.log(main());
