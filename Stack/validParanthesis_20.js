class Stack {
    constructor() {
        this.arr = [];
    }

    push(elem) {
        this.arr.push(elem);
    }

    pop() {

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
    const s = "(){}}";
    let stringStack = new Stack();

    if (s.length == 0) {
        return true;
    }
    let stringMapper = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        if (char == '(' || char == '[' || char == '{') {
            stringStack.push(char);
        }
        else if (char == ')' || char == ']' || char == '}') {
            console.log(stringMapper[char]);

            if (stringMapper[char] == stringStack.top()) {
                stringStack.pop();
            }
            else {
                return false;
            }
        }

    }
    return stringStack.size() === 0;

}

// Did my own
function isValid() {

    let stringStack = new Stack();

    if (s.length == 0) {
        return true;
    }

    for (const char of s) {
        if (char == '(') {
            stringStack.push(char);
        }
        else if (char == ')') {
            if ('(' == stringStack.top()) {
                stringStack.pop();
                continue;
            }
            else {
                return false;
            }
        }
        else if (char == '[') {
            stringStack.push(char);
        }
        else if (char == ']') {
            if ('[' == stringStack.top()) {
                stringStack.pop();
                continue;
            }
            else {
                return false;
            }
        } else if (char == '{') {
            stringStack.push(char);
        }
        else if (char == '}') {
            if ('{' == stringStack.top()) {
                stringStack.pop();
                continue;
            }
            else {
                return false;
            }
        }

    }

    return stringStack.size() === 0;
}
console.log(main());
