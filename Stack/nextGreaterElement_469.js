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
    const nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2];

    let s = new Stack();
    let gteArr = []

    let map = {}

    for (let i = nums2.length - 1; i >= 0; i--) {

        while (s.top() <= nums2[i] && s.size() > 0) {
            s.pop()
        }
        gteArr[i] = s.size() === 0 ? -1 : s.top();
        map[nums2[i]] = gteArr[i];
        s.push(nums2[i]);
    }

    let ans = [];
    for (let val of nums1) {
        ans.push(map[val])
    }

    return ans;

}

function subOptimal() {
    const nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2];

    let s = new Stack();
    let gteArr = []

    let map = {}
    for (let i = nums2.length - 1; i >= 0; i--) {

        if (s.size() === 0) {
            s.push(nums2[i]);
            gteArr[i] = -1;
            map[nums2[i]] = gteArr[i];
        }
        else if (s.top() > nums2[i]) {
            gteArr[i] = s.top();
            map[nums2[i]] = gteArr[i];
            s.push(nums2[i]);
        }
        else {
            while (s.top() <= nums2[i] && s.size() > 0) {
                s.pop()
            }
            gteArr[i] = s.size() === 0 ? -1 : s.top();
            map[nums2[i]] = gteArr[i];
            s.push(nums2[i]);
        }
    }

    let ans = [];
    for (let val of nums1) {
        ans.push(map[val])
    }

    return ans;

}


function bruteForce() {

    const nums1 = [4, 1, 2, 0], nums2 = [3, 4, 2, 0, 1];

    const ans = new Array();

    for (let val of nums1) {

        let elemIndexC = nums2.indexOf(val);
        let maxOnRight = getMax(elemIndexC, val, nums2.length, nums2);

        ans.push(maxOnRight ?? -1)
    }
    return ans;
}
function getMax(i, val, n, nums2) {

    let max = nums2[i];
    while (i < n) {
        if (nums2[i] > val) {

            max = nums2[i];
            return max;
        }
        i++;
    }
    return -1;
}


console.log(subOptimal());