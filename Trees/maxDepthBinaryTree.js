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
    root.right = new Node(5);
    root.left.left = new Node(3);
    root.left.right = new Node(4);
    root.right.left = new Node(6);
    root.right.right = new Node(7);
    root.right.right.left = new Node(45)

    console.log(depth(root));


}

function depth(root) {
    if (root == null)
        return 0;

    let leftTree = 1 + depth(root.left);
    let rightTree = 1 + depth(root.right);

    return Math.max(leftTree, rightTree);
}



main()