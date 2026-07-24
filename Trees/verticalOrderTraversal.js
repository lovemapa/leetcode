class Node {

    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}

function main() {
    // let root = new Node(3);
    // root.left = new Node(9);
    // root.right = new Node(20);
    // root.right.left = new Node(15);
    // root.right.right = new Node(7);
    // root.left.left = new Node(4);
    // root.left.left.right = new Node(14);
    // root.left.right = new Node(5);
    // root.left.right.left = new Node(8);
    // root.left.right.right = new Node(9);
    // root.right.right.left = new Node(45)


    let root = new Node(3);
    root.left = new Node(1);
    root.right = new Node(4);
    root.left.left = new Node(0);
    root.left.right = new Node(2);
    root.right.left = new Node(2);
    // root.left.left.right = new Node(14);
    // root.right.right = new Node(7);
    // root.left.right.left = new Node(8);
    // root.left.right.right = new Node(9);
    // root.right.right.left = new Node(45)


    // let root = new Node(1);
    // root.left = new Node(2);
    // root.right = new Node(3);
    // root.left.left = new Node(4);
    // // root.left.left.right = new Node(2);
    // root.left.right = new Node(6);
    // root.right.left = new Node(5);
    // root.right.right = new Node(7);
    // // root.left.right.left = new Node(8);
    // // root.left.right.right = new Node(9);
    // // root.right.right.left = new Node(45)


    const mapper = {};
    verticalOrderTraversal(root, 0, 0, mapper, 0);
    const elem = Object.keys(mapper).sort((a, b) => a - b)

    const ans = [];
    for (let val of elem) {
        ans.push(mapper[val].sort((a, b) => a.level - b.level || a.value - b.value))
    }

    const res = [];
    
    for (const arr of ans) {
        res.push(arr.map(e => e.value))
    }
    
    return res;


}

function verticalOrderTraversal(root, row, col, mapper, level) {

    if (root == null) return;
    if (!mapper[col]) {;
        mapper[col] = [];
        mapper[col].push({ value: root.val, level });
    }
    else {
        mapper[col].push({ value: root.val, level });
    }
    verticalOrderTraversal(root.left, row + 1, col - 1, mapper, level + 1);
    verticalOrderTraversal(root.right, row + 1, col + 1, mapper, level + 1)

}

console.log(main());

