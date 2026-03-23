class DisjointSets {
 
    constructor(vertices) {
        this.vertices = vertices;
        this.parent = Array(vertices + 1);
        this.rank = Array(vertices + 1).fill(0);
 
        for (let i = 0; i <= vertices; i++) {
            this.parent[i] = i;
        }
    }
 
    FindParent(node) {
        if (node === this.parent[node]) {
            return node;
        }
        return this.parent[node] =
            this.FindParent(this.parent[node]);
    }
 
    UnionByRank(u, v) {
        const ulUParent = this.FindParent(u);
        const ulVParent = this.FindParent(v);
 
        if (ulUParent === ulVParent) return;
 
        if (this.rank[ulUParent] < this.rank[ulVParent]) {
            this.parent[ulUParent] = ulVParent;
        }
        else if (this.rank[ulUParent] > this.rank[ulVParent]) {
            this.parent[ulVParent] = ulUParent;
        }
        else {
            this.parent[ulVParent] = ulUParent;
            this.rank[ulUParent]++;
        }
    }
}

const heap = [];

const parentHeap = i => Math.floor((i - 1) / 2);
const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

const swap = (i, j) => ([heap[i], heap[j]] = [heap[j], heap[i]]);

// ✅ Push (distance, row, col)
const push = (dist, row, col) => {
    heap.push([dist, row, col]);

    let i = heap.length - 1;

    // Bubble up based on distance
    while (i > 0 && heap[i][0] < heap[parentHeap(i)][0]) {
        swap(i, parentHeap(i));
        i = parentHeap(i);
    }
};

// ✅ Pop minimum distance cell
const pop = () => {
    if (!heap.length) return null;
    if (heap.length === 1) return heap.pop();

    const min = heap[0];
    heap[0] = heap.pop();

    let i = 0;

    while (left(i) < heap.length) {
        let smallest = left(i);

        if (
            right(i) < heap.length &&
            heap[right(i)][0] < heap[smallest][0]
        ) {
            smallest = right(i);
        }

        // Compare only by distance
        if (heap[i][0] <= heap[smallest][0]) break;

        swap(i, smallest);
        i = smallest;
    }

    return min;
};


function main() {

    const V = 3, E = 3, edges = [[0, 1, 5], [1, 2, 3], [0, 2, 1]]
    const sortedArray= edges.sort((a,b)=>a[2]-b[2]);
    
    const set1= new DisjointSets(V);
    const msts = [];
    let sum = 0;
    let count=0;
    for(const [u,v,w] of sortedArray){
        if (set1.FindParent(u) !== set1.FindParent(v)) {
            msts.push([u, v]);
            sum += w;
            set1.UnionByRank(u, v);
        }
    }
    
    return sum;

}

main()