class Node {

    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}

function main() {
    let root = new Node(3);
    root.left = new Node(9);
    root.right = new Node(20);
    // root.left.left = new Node(3);
    // root.left.right = new Node(4);
    root.right.left = new Node(15);
    root.right.right = new Node(7);
    // root.right.right.left = new Node(45)

    zigZagLevelOrderTraversal(root)

}

function zigZagLevelOrderTraversal(root) {

    if (root == null) return [];

    const queue = [];
    const result = [];
    let flagForReversal = 0;
    queue.push(root);

    while (queue.length) {
        let size = queue.length;
        let level = [];
        while (size--) {
            const elem = queue.shift();
            level.push(elem.val);

            if (elem.left) {
                queue.push(elem.left);
            }
            if (elem.right) {
                queue.push(elem.right);
            }
        }
        result.push(flagForReversal ? level.toReversed() : level);
        flagForReversal=!flagForReversal;
    }
    return result;

}
main()