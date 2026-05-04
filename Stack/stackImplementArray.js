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
        return this.arr[this.arr.length - 1];
    }

    size() {
        return this.arr.length;
    }
}
function main() {
    let s = new Stack(4);
    s.push(1);
    s.push(89);
    s.push(2);
    console.log(s);
    s.pop()
    s.pop()
    s.pop()
    console.log(s);

}

main()