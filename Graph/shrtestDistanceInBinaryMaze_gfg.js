function main() {
    const grid = [
        [1, 1, 1, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 1],
        [1, 1, 0, 0],
        [1, 0, 0, 1]
    ];
    const source = [0, 1]
    const destination = [2, 2];

    const rows = grid.length;
    const cols = grid[0].length;

    const queue = [];

    const visited = Array.from({ length: grid.length }, (e) => new Array(grid[0].length).fill(false));
    visited[source[0]][source[1]] = true;

    if (grid[source[0]][source[1]] === 0 || grid[destination[0]][destination[1]] === 0) {
        return -1;
    }


    if (source[0]===destination[0] && source[1]===destination[1]) {
        return 0;
    }

    queue.push([0,source[0], source[1]]);

    while (queue.length) {

        const [dist, i, j] = queue.shift();

        const dl = [0, 0, 1, -1];
        const dr = [-1, 1, 0, 0];

        for (let k = 0; k < 4; k++) {
            const newRow = i + dl[k];
            const newCol = j + dr[k];

            if (newRow >= 0 && newCol >= 0 && newRow < rows 
                && newCol < cols && grid[newRow][newCol]===1
                && !visited[newRow][newCol]) {

                if (newRow === destination[0] && newCol===destination[1]) {
                    return 1 + dist;
                }

                visited[newRow][newCol] = true;
                queue.push([1+dist, newRow, newCol]);

            }
        }

    }
    return -1;

}

main()
