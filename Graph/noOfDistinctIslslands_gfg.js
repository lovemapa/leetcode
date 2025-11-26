function main() {

    const grid = [
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1]
    ]
    const visited = grid.map(e => [...e].fill(0));
    let rows = grid.length;
    let columns = grid[0].length;

    const s = new Set();


    let count = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (!visited[row][col] && grid[row][col] == 1) {
                count++;
                BFS(row, col, visited, grid, s);
            }

        }
    }
    return s.size;
}

function BFS(startRow, startCol, visited, grid, s) {

    const queue = [];
    visited[startRow][startCol] = 1;
    queue.push({ row: startRow, col: startCol });

    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    let positions = [];
    while (queue.length > 0) {

        const { row, col } = queue.shift();
        positions.push((row - startRow) + "," + (col - startCol));
        for (let [rowDirection, columnDirection] of directions) {
            let newRow = rowDirection + row;
            let newCol = columnDirection + col;
            if (newCol < grid[0].length && newCol >= 0 && newRow < grid.length && newRow >= 0 && grid[newRow][newCol] === 1 && !visited[newRow][newCol]) {
                visited[newRow][newCol] = 1;
                queue.push({ row: newRow, col: newCol })
            }

        }
    }

    positions.sort();
    s.add(positions.join(";"));
}
main()