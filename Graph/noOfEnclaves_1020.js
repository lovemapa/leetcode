function main() {

    const grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]];
    let visited = grid.map(e => [...e].fill(0));

    const rows = grid.length;
    const columns = grid[0].length;

    // first col
    for (let r = 0; r < rows; r++) {
        if (grid[r][0] && !visited[r][0]) {

            BFS(grid, visited, r, 0, rows, columns)
        }
    }
    // last col
    for (let r = 0; r < rows; r++) {
        if (grid[r][columns - 1] && !visited[r][columns - 1]) {

            BFS(grid, visited, r, columns - 1, rows, columns);
        }
    }

    // first row
    for (let c = 0; c < columns; c++) {
        if (grid[0][c] && !visited[0][c]) {

            BFS(grid, visited, 0, c, rows, columns);
        }
    }

    // last row
    for (let c = 0; c < columns; c++) {
        if (grid[rows - 1][c] && !visited[rows - 1][c]) {

            BFS(grid, visited, rows - 1, c, rows, columns);
        }
    }

    
    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            if (grid[r][c] == 1 && !visited[r][c]) {
                count++
            }

        }
    }

    return count;

}

function BFS(grid, visited, row, col, rows, columns) {

    let queue = [];

    visited[row][col] = 1;
    queue.push({ row: row, col: col });

    let ld = [0, 0, 1, -1];
    let rd = [-1, 1, 0, 0];

    while (queue.length > 0) {

        let elem = queue.shift();
        const { row, col } = elem;

        for (let k = 0; k < 4; k++) {
            let newRow = row + ld[k];
            let newCol = col + rd[k];

            if (newRow >= 1 && newCol >= 1 && newRow < rows && newCol < columns && !visited[newRow][newCol] && grid[newRow][newCol] !== 0) {
                visited[newRow][newCol] = 1;
                queue.push({ row: newRow, col: newCol })
            }

        }


    }

}

main()