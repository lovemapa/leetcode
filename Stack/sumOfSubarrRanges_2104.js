class MyStack {
    constructor() {
        this.arr = [];
    }

    push(elem) {
        this.arr.push(elem);
    }

    pop() {
        if (this.arr.length === 0) {
            throw new Error("MyStack is empty");
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
    let arr =  [1,3,3]

    let total = 0;
    const PSE = findPSE(arr);
    const NSE = findNSE(arr);
    const NGE = findNGE(arr);
    const PGE = findPGE(arr);


    for (let i = 0; i < arr.length; i++) {

        let left = i - PSE[i];
        let right = NSE[i] - i;
        let maxRight = NGE[i] - i;
        let maxLeft = i-PGE[i] ;
        total = total + ((maxLeft * maxRight * arr[i]) - (left * right * arr[i]));
    }


    return total;
}

function findPSE(arr) {
    const s = new MyStack();

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

function findPGE(arr) {
    const s = new MyStack();

    const pse = [];
    for (let i = 0; i < arr.length; i++) {
        while (s.size() > 0 && arr[i] >= arr[s.top()]) {
            s.pop();
        }
        pse[i] = s.size() === 0 ? -1 : s.top();
        s.push(i);

    }
    return pse;

}

function findNSE(arr) {
    const s = new MyStack();

    const nse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (s.size() > 0 && arr[i] < arr[s.top()]) {
            s.pop();
        }
        nse[i] = s.size() === 0 ? arr.length : s.top();
        s.push(i);

    }

    return nse;
}



function findNGE(arr) {
    const s = new MyStack();

    const nse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (s.size() > 0 && arr[i] > arr[s.top()]) {
            s.pop();
        }
        nse[i] = s.size() === 0 ? arr.length : s.top();
        s.push(i);

    }

    return nse;
}


console.log(main());
