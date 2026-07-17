class Node {

    constructor(val) {
        this.data = val;
        this.left = null
        this.right = null
    }
}

function main() {
    let root = new Node(1);
    root.left = new Node(-1);
    // root.right = new Node(3);
    // root.right.left = new Node(15);
    // root.right.right = new Node(7);
    // root.right.right.left = new Node(45)



    let root2 = new Node(1);
    // root2.left = new Node(-1);
    root2.right = new Node(-1);
    // root2.right.left = new Node(15);
    // root2.right.right = new Node(7);
    // root2.right.right.left = new Node(45)

    let traversalOne = { val: '' }
    let traversalTwo = { val: '' }
    inOrder(root, traversalOne);
    inOrder(root2, traversalTwo);

    console.log(traversalOne, traversalTwo);

    console.log(JSON.stringify(traversalOne.val) == JSON.stringify(traversalTwo.val));

}


main()
function inOrder(node, path) {
    if (node == null) { path.val = path.val + null; return };
    inOrder(node.left, path);
    path.val = path.val + node.data;
    inOrder(node.right, path)

}

