class Node {

    constructor(val) {
        this.data = val;
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

    levelOrderTraversal(root)

}


function levelOrderTraversal(root) {

    const result = [];
    let count = 0;
    const queue = [];
    queue.push([root, count]);
    const level = []

    while (queue.length) {
        const [elem, count] = queue.shift();
        result[count] ??= [];
        level.push(elem.data)

        if (elem.left) {
            queue.push([elem.left, count + 1])
        }
        if (elem.right) {
            queue.push([elem.right, count + 1])
        }
    }

    return result;

}

function levelOrder(root) {
    if (!root) return [];

    const ans = [];
    const queue = [root];

    while (queue.length) {
        let size = queue.length;
        const level = [];

        while (size--) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        ans.push(level);
    }

    return ans;
}

main()