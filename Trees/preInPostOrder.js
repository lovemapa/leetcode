class Node {

    constructor(val) {
        this.data = val;
        this.left = null
        this.right = null
    }
}


function main() {
    let root = new Node(1);
    // root.left = new Node(2);
    root.right = new Node(5);
    // root.left.left = new Node(3);
    // root.left.right = new Node(4);
    // root.right.left = new Node(6);
    // root.right.right = new Node(7);


    preInPostOrder(root);

}

function preInPostOrder(root) {

    let pre = [];
    let inO = [];
    let post = [];
    if (root == null) {
        return root;
    }
    const stack = [];
    stack.push([root, 1]);

    while (stack.length) {
        const [node, number] = stack.pop();

        if (number == 1) {
            pre.push(node.data);
            stack.push([node, number + 1]); 
            if (node.left) {
                stack.push([node.left, 1]);
            }
        }
        else if (number == 2) {
            inO.push(node.data);
            stack.push([node, number + 1]);
            if (node.right) {
                stack.push([node.right, 1]);
            }
        }
        else if (number == 3) {
            post.push(node.data);
        }
    }

    console.log(pre);
    console.log(inO);
    console.log(post);


}

main()