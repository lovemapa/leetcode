function main() {
    const grid = [[2,1,1],[0,1,1],[1,0,1]]
    let rows = grid.length;
    let columns = grid[0].length;

    let queue = [];
    let visited = grid.map(e => [...e].fill(0));
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (grid[r][c] == 2) {
                queue.push({ row: r, col: c, time: 0 });
                visited[r][c] = 1;
            }
        }
    }

    let maxTime = 0;
    let leftDir = [0, 0, -1, 1];
    let rightDir = [1, -1, 0, 0];

    while (queue.length > 0) {
        let elem = queue.shift();

        const { row, col, time } = elem;
        maxTime = Math.max(time, maxTime);


        for (let k = 0; k < 4; k++) {
            let newRow = row + leftDir[k];
            let newCol = col + rightDir[k];


            if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < columns && grid[newRow][newCol] == 1 && !visited[newRow][newCol]) {
                visited[newRow][newCol] = 1;
                grid[newRow][newCol] = 2;
                queue.push({ row: newRow, col: newCol, time: time + 1 });

            }

        }

    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === 1) {
                console.log(-1);
                return;

            }
        }
    }

    return maxTime;


}



main()

