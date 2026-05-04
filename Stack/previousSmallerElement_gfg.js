class MaxStack {
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
    const arr = [1, 4, 6, 7, 3, 7, 8, 1];

    const s = new MaxStack();
    const lte = [];

    for (let i = 0; i < arr.length; i++) {
        while (arr[i] <= s.top() && s.size() > 0) {
            s.pop();
        }

        lte[i] = s.size() === 0 ? -1 : s.top();
        s.push(arr[i])
    }


    return lte;

}


console.log(main());
