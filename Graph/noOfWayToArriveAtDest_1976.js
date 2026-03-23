
const heap = [];
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

function main() {
    const n = 7, roads = [
        [0, 6, 7], [0, 1, 2],
        [1, 2, 3], [1, 3, 3], [6, 3, 3],
        [3, 5, 1], [6, 5, 1], [2, 5, 1],
        [0, 4, 5], [4, 6, 2]];

    const ways = Array(n + 1).fill(0);
    const distances = Array(n + 1).fill(Infinity);

    const adjacenyList = Array.from({ length: n }, (e) => []);

    for (const [u, v, W] of roads) {
        adjacenyList[u].push([v, W]);
        adjacenyList[v].push([u, W]);
    }

    heap.length = 0;

    src = 0;
    dst = n - 1;
    distances[src] = 0;
    ways[src] = 1;

    push(0, src);

    while (heap.length) {
        const [dist, node] = pop();

        for (const [neighbour, neighbourDist] of adjacenyList[node]) {

            if (dist + neighbourDist < distances[neighbour]) {
                distances[neighbour] = dist + neighbourDist;
                push(dist + neighbourDist, neighbour);
                ways[neighbour] = ways[node];
            }
            else if (dist + neighbourDist === distances[neighbour]) {
                ways[neighbour] = ways[neighbour] + ways[node];
            }

        }
    }
    return ways[dst]

}


main()