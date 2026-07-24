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
    // root.left.right = new Node(5);
    // root.right.left = new Node(2);
    // root.right.right = new Node(3);
    // root.right.right.left = new Node(4);
    // root.left.left.left = new Node(1);
    // root.left.left.right = new Node(14);
    // root.left.right.left = new Node(8);
    // root.left.right.right = new Node(9);
    // root.right.right.left = new Node(45)

    // let root = new Node(1);
    // root.left = new Node(2);
    // root.right = new Node(3);
    // root.left.left = new Node(4);
    // root.left.right = new Node(5);


    const result = { value: [] };

    // printPath(root, path, result);
    printPathGFG(root, [root.data], result);
    console.log(result.value);

}

function printPath(node, path, result) {

    if (node?.left == null && node?.right == null) {
        result.value.push(path)
        return
    };


    if (node.left) printPath(node.left, path + `->${node.left.data}`, result);
    if (node.right) printPath(node.right, path + `->${node.right.data}`, result);


}


function printPathGFG(node, path, result) {


    if (node?.left == null && node?.right == null) {
        result.value.push(path)
        return
    };



    if (node.left) { printPathGFG(node.left, [...path, node.left.data], result); }
    if (node.right) { printPathGFG(node.right, [...path, node.right.data], result); }


}

main()