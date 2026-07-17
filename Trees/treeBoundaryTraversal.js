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
    root.left.left = new Node(4);
    root.left.left.right = new Node(14);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);
    root.left.right.left = new Node(8);
    root.left.right.right = new Node(9);
    root.right.right.left = new Node(45)


    // let root = new Node(1);
    // root.left = new Node(2);
    // root.right = new Node(3);
    // root.left.left = new Node(4);
    // root.left.right = new Node(5);
    // root.right.left = new Node(6);
    // root.right.right = new Node(7);
    // root.left.right.left = new Node(8);
    // root.left.right.right = new Node(9);




    //     let root = new Node(1);
    // // root.left = new Node(2);
    // root.left = new Node(2);
    // // root.left.left = new Node(4);
    // // root.left.left.right = new Node(14);
    // // root.left.right = new Node(5);
    // root.left.left = new Node(3);
    // root.left.right = new Node(4);
    // // root.left.right.left = new Node(8);
    // // root.left.right.right = new Node(9);
    // // root.right.right.left = new Node(45)


    //         let root = new Node(1);
    // // root.left = new Node(2);
    // root.right = new Node(2);
    // // root.left.left = new Node(4);
    // // root.left.left.right = new Node(14);
    // // root.left.right = new Node(5);
    // root.right.left = new Node(3);
    // root.right.right = new Node(4);
    // root.left.right.left = new Node(8);
    // root.left.right.right = new Node(9);
    // root.right.right.left = new Node(45)



    // let root = new Node(1);
    // root.left = new Node(2);
    // root.right = new Node(3);
    // root.left.left = new Node(4);
    // root.left.left.right = new Node(14);
    // root.left.right = new Node(5);
    // root.right.left = new Node(4);
    // root.right.left.left = new Node(5);
    // root.left.right.left = new Node(8);
    // root.left.right.right = new Node(9);
    // root.right.right.left = new Node(45)




    let result = [];
    if (root.left || root.right) result.push(root.data)
    getLeftNode(root, result);
    getLeafNodes(root, result);
    getRightNode(root, result);

    console.log(result);
    


}


function getLeftNode(root, result) {
    let node = root.left;
    while (node) {
        if (!isLeaf(node)) result.push(node.data);
        if (node?.left) node = node.left
        else node = node.right;
    }

}

function isLeaf(node) {
    return (node?.left == null && node?.right == null)
}

function getLeafNodes(root, result) {
    if (root == null) return;
    if (root?.left == null && root?.right == null) { if (root) { result.push(root?.data) }; return };
    getLeafNodes(root.left, result);
    getLeafNodes(root.right, result);

}

function getRightNode(root, result) {
    let node = root.right;
    const stack = [];
    while (node) {
        if (!isLeaf(node)) stack.push(node.data);
        if (node?.right) node = node.right
        else node = node.left;
    }
    while (stack.length) {
        const elem = stack.pop();
        result.push(elem);
    }
}
main()