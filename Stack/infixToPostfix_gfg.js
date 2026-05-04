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
    const str = "a*(b+c)/d";

    const operands = {
        '^': 3,
        '*': 2,
        '/': 2,
        '+': 1,
        '-':1,
        '(': -1
    }
    const s = new Stack();

    let ans = '';

    let i=0;
    
    let charC='A';
    for(i=0;i<9;i++){
        console.log(charC[i]);
    
    }
    console.log(ans);
    

}

main()