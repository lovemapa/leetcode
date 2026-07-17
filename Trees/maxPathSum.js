class Node {

    constructor(val) {
        this.data = val;
        this.left = null
        this.right = null
    }
}

function main() {
    let root = new Node(2);
    root.left = new Node(-1);
    // root.right = new Node(3);
    // root.right.left = new Node(15);
    // root.right.right = new Node(7);
    // root.right.right.left = new Node(45)

    let maxVal = { value: Number.MIN_SAFE_INTEGER };
    maxPathSum(root, maxVal)
    console.log(maxVal.value);

}


main()


function maxPathSum(root, maxVal) {

    if (root == null) {
        return 0;
    }

    let lTree = Math.max(0,maxPathSum(root.left, maxVal));
    let rTree = Math.max(0,maxPathSum(root.right, maxVal));

    maxVal.value = Math.max(maxVal.value, root.data + lTree + rTree);

    console.log(lTree,rTree,root.data);
    

    // if (lTree < 0 || rTree < 0) return 0;
    return root.data + Math.max(lTree, rTree);
}