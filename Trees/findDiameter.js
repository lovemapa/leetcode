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
    
    let diameter = { value: 0 };
    findDiameter(root, diameter)
    console.log(diameter.value);
    
}


main()


function findDiameter(root, diameter) {

    if (root == null)
        return 0;

    let lTree = findDiameter(root.left, diameter);
    let rTree = findDiameter(root.right, diameter);

    diameter.value = Math.max(diameter.value, lTree + rTree);
    

    return 1 + Math.max(lTree, rTree);
}