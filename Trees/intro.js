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


    // preOrderTraversal(root);
    postOrderTraversal(root);
    // inOrderTraversal(root);
    // levelOrderTraversal(root)

}

function preOrderTraversal(root) {
    if (root == null) return;
    console.log(root.data);
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)

}

function postOrderTraversal(root) {
    if (root == null) return;
    postOrderTraversal(root.left)
    postOrderTraversal(root.right)
    console.log(root.data);

}

function inOrderTraversal(root) {
    if (root == null) return;
    inOrderTraversal(root.left)
    console.log(root.data);
    inOrderTraversal(root.right)

}


function levelOrderTraversal(root) {

    const queue = [];
    queue.push(root);

    while (queue.length) {
        let root = queue.shift();

        console.log(root.data);
        if (root.left) {
            queue.push(root.left)
        }
        if (root.right) {
            queue.push(root.right)
        }

    }


}

main()