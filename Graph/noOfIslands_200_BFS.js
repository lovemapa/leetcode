function main() {

    const grid =[
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
    const visited = grid.map(e => [...e].fill(0));
    let columns = grid[0].length;

    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < columns; col++) {

            if (!visited[row][col] && grid[row][col] == '1') {
                count++;
                BFS(row, col, visited, grid);
            }

        }
    }
    console.log(count);
}

function BFS(row, col, visited, grid) {

    const queue = [];
    visited[row][col] = 1;
    queue.push({ row, col });

    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while (queue.length > 0) {

        const {row,col}= queue.shift();
        for (let [rowDirection, columnDirection] of directions) {
            let newRow = rowDirection + row;
            let newCol = columnDirection + col;
            if (newCol < grid[0].length && newCol >= 0 && newRow < grid.length && newRow >= 0 && grid[newRow][newCol] == '1' && !visited[newRow][newCol]) {
                visited[newRow][newCol] = 1;
                queue.push({ row: newRow, col: newCol })
            }

        }
    }

}
main()