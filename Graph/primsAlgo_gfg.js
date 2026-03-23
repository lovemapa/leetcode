const heap = [];

const parent = i => Math.floor((i - 1) / 2);
const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

const swap = (i, j) => ([heap[i], heap[j]] = [heap[j], heap[i]]);

// ✅ Push (distance, row, col)
const push = (dist, row, col) => {
    heap.push([dist, row, col]);

    let i = heap.length - 1;

    // Bubble up based on distance
    while (i > 0 && heap[i][0] < heap[parent(i)][0]) {
        swap(i, parent(i));
        i = parent(i);
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
    const V = 2, E = 1, Edges = [[0, 1, 5]]

    const adjacencyList = Array.from({ length: V }, (e) => []);

    for (const [u, v, w] of Edges) {

        adjacencyList[u].push([v, w]);
        adjacencyList[v].push([u, w]);

    }

    const msts = Array(V);
    const visited = Array(V).fill(0);
    heap.length = 0;
    let sum = 0;
    heap.push([0, 0, -1]);

    while (heap.length) {

        const [weight, node, parent] = pop();

        if (visited[node]) continue;
        visited[node] = 1;
        if (parent !== -1) {
            msts.push([node, parent]);
            sum = sum + weight;
        }

        for (const [neighbour, edgeWeight] of adjacencyList[node]) {
            if (!visited[neighbour]) {
                push(edgeWeight, neighbour, node);
            }
        }
    }

    return sum;

}

console.log(main());

