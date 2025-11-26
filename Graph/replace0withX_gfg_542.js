function main() {
    const grid = [["X","O","X"],["O","X","O"],["X","O","X"]]
        

    const output = grid.map(e => [...e]);
    const visited = grid.map(e => [...e].fill(0));

    const rows = grid.length;
    const columns = grid[0].length;


    for (let r = 0; r < rows; r++) {

        
        
        if (grid[r][0] === 'O' && !visited[r][0]) {
            DFS(grid, visited, output, rows, columns, r, 0)
        }
    }

    for (let r = 0; r < rows; r++) {
        if (grid[r][columns - 1] === 'O' && !visited[r][columns - 1]) {
            DFS(grid, visited, output, rows, columns, r, columns - 1)

        }
    }

    for (let c = 0; c < columns; c++) {
        if (grid[0][c] === 'O' && !visited[0][c]) {
            DFS(grid, visited, output, rows, columns, 0, c)
        }
    }

    for (let c = 0; c < columns; c++) {
        if (grid[rows - 1][c] === 'O' && !visited[rows - 1][c]) {
            DFS(grid, visited, output, rows, columns, rows - 1, c)

        }
    }

    let count=0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] == 'O' && !visited[i][j]) {
                count++;;
                visited[i][j] = 1;
            }
        }
    }
    return grid

}


function DFS(grid, visited, output, rows, columns, row, col) {
    if (row < 0 || col < 0 || row >= rows || col >= columns || visited[row][col] || grid[row][col] == 'X') {
        return;
    }
    visited[row][col] = 1;
    DFS(grid, visited, output, rows, columns, row + 1, col);
    DFS(grid, visited, output, rows, columns, row - 1, col);
    DFS(grid, visited, output, rows, columns, row, col + 1);
    DFS(grid, visited, output, rows, columns, row, col - 1);
}

console.log(main());

