class Node {

    constructor(val) {
        this.data = val;
        this.left = null
        this.right = null
    }
}


function main() {
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    // root.right.left = new Node(4);
    root.right.right = new Node(4);
    // root.right.right.left = new Node(4);
    // root.left.left = new Node(4);
    // root.left.left.left = new Node(1);
    // root.left.left.right = new Node(14);
    root.left.right = new Node(5);
    // root.left.right.left = new Node(8);
    // root.left.right.right = new Node(9);
    // root.right.right.left = new Node(45)

    // let root = new Node(1);
    // root.left = new Node(0);

    // getLeftView(root.left, result);
    // if (root) result.push(root.data);
    // getRightView(root.right, result);
    // let root = new Node(3);
    // root.left = new Node(1);
    // root.right = new Node(4);
    // root.left.left = new Node(0);
    // root.left.right = new Node(2);
    // root.right.left = new Node(2);
    const result = [];

    if (root == null) return [];

    let max = 0, min = 0;

    let queue = [];

    const m = new Map();
    let head = 0;
    queue.push([root, 0]);

    while (head < queue.length) {
        const [node, col] = queue[head++];

        if (col < min)
            min = col;
        if (col > max)
            max = col;
        if (!m.has(col)) {
            m.set(col, node.data)
        }
        if (node.right) queue.push([node.right, col + 1]);
        if (node.left) queue.push([node.left, col + 1]);
    }

    for (let i = min; i <= max; i++) {
        result.push(m.get(i))
    }
    return result


}

console.log(main());
