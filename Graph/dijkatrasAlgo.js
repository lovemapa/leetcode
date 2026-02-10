const heap = []
function main() {
    const V = 5, edges = [[0, 1, 4], [0, 2, 8], [1, 4, 6], [2, 3, 2], [3, 4, 10]], src = 0

    const adjacencyList = Array.from({ length: V }, (e) => []);

    for (const [u, v, w] of edges) {
        adjacencyList[u].push([v, w]);
        adjacencyList[v].push([u, w]);
    }
    const visited = Array.from({ length: V }).fill(0);
    const distance = Array.from({ length: V }).fill(Infinity);

    distance[src] = 0;

    push(0, src);

    console.log(adjacencyList);

    while (heap.length > 0) {
        const [dist, node] = pop();

        if(dist>distance[node]) continue;

        for (let [neighbour, weight] of adjacencyList[node]) {
            if (distance[node] + weight < distance[neighbour]) {
                distance[neighbour] = distance[node] + weight;
                push(distance[neighbour], neighbour)
            }
        }

    }

}



const parent = i => Math.floor((i - 1) / 2);
const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

const swap = (i, j) => ([heap[i], heap[j]] = [heap[j], heap[i]]);

const push = (dist, node) => {
    heap.push([dist, node]);
    let i = heap.length - 1;
    while (i > 0 && heap[i][0] < heap[parent(i)][0]) {
        swap(i, parent(i));
        i = parent(i);
    }
};

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

        // ✅ compare by dist, not node
        if (heap[i][0] <= heap[smallest][0]) break;

        swap(i, smallest);
        i = smallest;
    }

    return min;
};

main()