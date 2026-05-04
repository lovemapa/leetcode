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
    const nums1 = [4, 1, 2], nums2 = [1, 2, 3, 4, 3]

    let s = new Stack();
    let gteArr = []

    let map = {}

    s.push(nums2.at(-1));

    for (let i = nums2.length * 2 - 1; i >= 0; i--) {

        while (s.top() <= nums2[i % nums2.length] && s.size() > 0) {
            s.pop();

        }

        if (i < nums2.length) {
            gteArr[i] = s.size() == 0 ? -1 : s.top();
        }
        s.push(nums2[i % nums2.length]);
    }

    return gteArr

}

console.log(main());
