class Node {

    constructor(val) {
        this.data = val;
        this.left = null
        this.right = null
    }
}

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;   // pointer to front
    this.tail = 0;   // pointer to next free slot
  }

  enqueue(value) {
    this.items[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const value = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return value;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.head];
  }

  isEmpty() {
    return this.head === this.tail;
  }

  get size() {
    return this.tail - this.head;
  }
}



function main() {
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    // root.right.left = new Node(4);
    root.right.right = new Node(6);
    // root.right.right.left = new Node(4);
    root.left.left = new Node(4);
    // root.left.left.left = new Node(1);
    // root.left.left.right = new Node(14);
    root.left.right = new Node(5);
    // root.left.right.left = new Node(8);
    // root.left.right.right = new Node(9);
    // root.right.right.left = new Node(45)

    // let root = new Node(1);
    // root.left = new Node(0);
    const result = [];

    if (root == null) return [];
    // getLeftView(root.left, result);
    // if (root) result.push(root.data);
    // getRightView(root.right, result);
    // let root = new Node(3);
    // root.left = new Node(1);
    // root.right = new Node(4);
    // root.left.left = new Node(0);
    // root.left.right = new Node(2);
    // root.right.left = new Node(2);

    const visited = {};

    bottomView(root, 0, visited)



    let arr = Object.keys(visited);
    const min = Math.min(...arr);
    const max = Math.max(...arr);


    const ans = [];
    for (let i = min; i <= max; i++) {
        ans.push(visited[i])
    }

    console.log(ans);

    // console.log(bottomViewOptimized(root));
    


}


function bottomView(node, col, visited) {

    const queue = new Queue();
    queue.enqueue([node, col]);

    while (Object.keys(queue.items).length) {
        const [node, col] = queue.dequeue();
        
        visited[col] = node.data;

        if (node.left) queue.enqueue([node.left, col - 1]);
        if (node.right) queue.enqueue([node.right, col + 1]);
    }

}


function bottomViewOptimized(root) {
    if (root == null)
        return [];

    const visited = new Map();
    let min = 0, max = 0;

    const queue = [[root, 0]];
    let head = 0;

    while (head < queue.length) {
        const [node, col] = queue[head++];
        
        visited.set(col, node.data);
        if (col < min)
            min = col;
        if (col > max)
            max = col;

        if (node.left) 
            queue.push([node.left, col - 1]);
        if (node.right)
            queue.push([node.right, col + 1]);
    }

    const ans = [];
    for (let i = min; i <= max; i++) {
        ans.push(visited.get(i));
    }

    console.log(queue);
    
    return ans;

}
main()