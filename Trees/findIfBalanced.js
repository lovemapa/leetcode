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
    root.right.left = new Node(6);
    root.right.right = new Node(7);
    root.right.right.left = new Node(45)

    return isBalancedTree(root) !== -1


}


function isBalancedTree(root) {
    if (root == null)
        return 0;
    let leftTree = depth(root.left);
    let rightTree = depth(root.right);

    if (leftTree == -1 || rightTree == -1) return -1;
    if (Math.abs(leftTree - rightTree) > 1) return -1;


    return 1 + Math.max(leftTree, rightTree);

}



function depth(root) {
    if (root == null)
        return 0;
    let leftTree = depth(root.left);
    let rightTree = depth(root.right);

    return 1 + Math.max(leftTree, rightTree);
}

console.log(main());

// main()