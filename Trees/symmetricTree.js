class Node {

    constructor(val) {
        this.data = val;
        this.left = null
        this.right = null
    }
}


function main() {
    // let root = new Node(1);
    // root.left = new Node(2);
    // root.right = new Node(2);
    // root.left.left = new Node(2);
    // // root.left.right = new Node(4);
    // root.right.left = new Node(2);
    // root.right.right = new Node(3);
    // root.right.right.left = new Node(4);
    // root.left.left.left = new Node(1);
    // root.left.left.right = new Node(14);
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


    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(2);
    root.left.right = new Node(2);
    root.right.right = new Node(2);

    // if (root == null || root.length == 1) return true;
    // const leftTree = [];
    // const rightTree = [];

    // IsSymetric(root.left, leftTree, 1);
    // IsSymetric(root.right, rightTree, 1);

    // return JSON.stringify(leftTree) == JSON.stringify(rightTree.toReversed())
    return isSymetricHelp(root.left,root.right);
}

console.log(main());

function IsSymetric(root, result, level) {
    if (root == null) { result.push(root?.data); return };

    IsSymetric(root.left, result, level + 1);
    result.push([root.data, level]);
    IsSymetric(root.right, result, level + 1)
}

function isSymetricHelp(left, right) {
    if (left == null || right == null)
        return left == right;
    if (left.data !== right.data) return false;

    return isSymetricHelp(left.left, right.right) && isSymetricHelp(left.right, right.left);

}