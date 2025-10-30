function solve(maze, duplicateMaze, row, col, result, move) {


    if (row == maze.length - 1 && col == maze.length - 1) {
        result.push(move)
        return;
    }

    // UP
    if (row - 1 >= 0 && maze[row - 1][col] && !duplicateMaze[row - 1][col]) {
        duplicateMaze[row - 1][col] = 1;
        solve(maze, duplicateMaze, row - 1, col, result, move + 'U');
        duplicateMaze[row - 1][col] = 0;
    }
    // DOWN
    if (row + 1 < maze.length && maze[row + 1][col] && !duplicateMaze[row + 1][col]) {
        duplicateMaze[row + 1][col] = 1;
        solve(maze, duplicateMaze, row + 1, col, result, move + 'D');
        duplicateMaze[row + 1][col] = 0;
    }
    // RIGHT
    if (col + 1 < maze.length && maze[row][col + 1] && !duplicateMaze[row][col + 1]) {
        duplicateMaze[row][col + 1] = 1;
        solve(maze, duplicateMaze, row, col + 1, result, move + 'R');
        duplicateMaze[row][col + 1] = 0;
    }
    // LEFT
    if (col - 1 >= 0 && maze[row][col - 1] && !duplicateMaze[row][col - 1]) {
        duplicateMaze[row][col - 1] = 1;
        solve(maze, duplicateMaze, row, col - 1, result, move + 'L');
        duplicateMaze[row][col - 1] = 0;
    }

}


function main() {
    const maze = [[1, 1, 1, 0, 1], [1, 0, 1, 1, 1], [0, 0, 1, 1, 1], [1, 0, 0, 1, 1], [1, 0, 0, 0, 1]];
    const duplicateMaze = Array.from({ length: maze.length }, (e) => new Array(maze.length).fill(0));
    duplicateMaze[0][0] = 1;
    const result = [];
    solve(maze, duplicateMaze, 0, 0, result, "");

    const sortedArr = result.toSorted((a, b) => a.localeCompare(b));
    console.log(sortedArr);
    

}

main()


