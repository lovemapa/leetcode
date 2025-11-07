function main() {

    const grid = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ]
    const visited = grid.map(e => [...e].fill(0));
    let columns = grid[0].length;

    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < columns; col++) {

            if (!visited[row][col] && grid[row][col] == '1') {
                count++;
                DFS(row, col, visited, grid);
            }

        }
    }
    console.log(count);
}

function DFS(row, col, visited, grid) {

    if (col >= grid[0].length || col < 0 || row >= grid.length || row < 0 || grid[row][col] !== '1' || visited[row][col]) {
        return
    }

    visited[row][col] = 1;

    DFS(row, col+1, visited, grid);
    DFS(row, col-1, visited, grid);
    DFS(row+1, col, visited, grid);
    DFS(row-1, col, visited, grid);

}
main()