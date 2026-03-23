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
    
    const mat =[[20, 57, 99, 4 ,25, 9, 45, 10, 90, 3]];

    const rows = mat.length;
    const cols = mat[0].length;

    const visited = Array.from({ length: rows }, (e) => Array(cols).fill(false));
    const efforts = Array.from({ length: rows }, (e) => Array(cols).fill(Infinity));

    push(0, 0, 0);
    efforts[0][0] = 0;

    const dl = [0, -1, 0, 1];
    const dr = [-1, 0, 1, 0];
    while (heap.length) {

        const [effort, i, j] = pop();        
        if (visited[i][j]) continue;
        visited[i][j] = true;
        for (let k = 0; k < 4; k++) {

            const newRow = i + dl[k];
            const newCol = j + dr[k];

            
            if (i === rows - 1 && j === cols - 1) {
                console.log(effort);
                return
            }

            if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && !visited[newRow][newCol]) {
                let newEffort = Math.max(Math.abs(mat[newRow][newCol] - mat[i][j]), efforts[i][j]);

                if (newEffort < efforts[newRow][newCol]) {
                    efforts[newRow][newCol] = newEffort;
                    push(newEffort, newRow, newCol)
                }

            }
        }

    }

}

main()





