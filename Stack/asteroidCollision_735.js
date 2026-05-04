class MyStack {
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


function subOptimal() {
    const asteroids = [-2, -1, 1, 2]
    let s = new MyStack();

    for (let val of asteroids) {
        if (val > 0) {
            s.push(val);
        }
        else {

            while (s.size() > 0 && s.top() > 0 && Math.abs(val) > s.top()) {
                s.pop();
            }

            if (s.size() == 0 || s.top() < 0) {
                s.push(val)
            }
            else if (s.size() > 0 && Math.abs(val) === s.top()) {
                s.pop()
            }

        }
    }

    return s.arr

}


function main() {
    const asteroids = [-2, -1, 1, 2]
    let s = []

    for (let val of asteroids) {
        if (val > 0) {
            s.push(val);
        }
        else {

            while (s.length > 0 && s.at(-1) > 0 && Math.abs(val) > s.at(-1)) {
                s.pop();
            }

            if (s.length == 0 || s.at(-1) < 0) {
                s.push(val)
            }
            else if (s.length > 0 && Math.abs(val) === s.at(-1)) {
                s.pop()
            }

        }
    }

    return s
}
console.log(main());

