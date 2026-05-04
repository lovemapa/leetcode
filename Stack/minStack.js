class MinStack {
    constructor() {
        this.arr = [];
        this.min = Number.MAX_SAFE_INTEGER;
    }

    push(elem) {
        if (this.arr.length === 0) {
            this.min = elem;
            this.arr.push(elem);
        }
        else {
            if (elem < this.min) {
                this.arr.push(2 * elem - this.min);
                this.min = elem;
            }
            else {
                this.arr.push(elem);
            }
        }
    }

    pop() {
        if (this.arr.length === 0) {
            throw new Error("Stack is empty");
        }
        if (this.arr.at(-1) < this.min) {
            this.min = 2 * this.min - this.arr.at(-1);
        }
        this.arr.pop();
    }

    top() {
        if (this.arr.at(-1) < this.min) {
            return this.min
        }
        else
            return this.arr.at(-1);
    }

    size() {
        return this.arr.length;
    }
    getMin() {
        return this.min;
    }
}
function main() {
    let minStack = new MinStack(4);
    minStack.push(12);
    minStack.push(15);
    minStack.push(10);
    console.log(minStack);

    console.log(minStack.getMin());
    minStack.pop();
    console.log(minStack.getMin());
    console.log(minStack.top());
    minStack.push(10);
    console.log(minStack.top());

}

main()