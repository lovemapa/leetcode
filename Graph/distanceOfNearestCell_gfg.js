function main() {
    const grid =
        [[0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1]];

    let visited = grid.map((e) => [...e].fill(0));
    let output = grid.map((e) => [...e].fill(0));
    const rows = grid.length;
    const columns = grid[0].length;

    const queue = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (grid[row][col]) {
                queue.push({ row: row, col: col, count: 0 });
                visited[row][col] = 1;
            }
        }
    }

    nearest(grid, visited, queue, rows, columns, output);
    return output;


}

function nearest(grid, visited, queue, rows, columns, output) {

    while (queue.length > 0) {
        const elem = queue.shift();
        let { row, col, count } = elem;

        const rd = [0, 0, -1, 1];
        const ld = [-1, 1, 0, 0];
        for (let k = 0; k <= 3; k++) {

            let newRow = row + rd[k]
            let newCol = col + ld[k];
            
            if (newRow < rows && newCol < columns && newRow >= 0 && newCol >= 0 && !visited[newRow][newCol]) {

                visited[newRow][newCol] = 1;
                output[newRow][newCol] = count + 1;
                queue.push({ row: newRow, col: newCol, count: count + 1 });
            }

        }
    }

}



main()