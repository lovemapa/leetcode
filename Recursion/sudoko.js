function sudoko(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') {

                for (let num = 1; num <= 9; num++) {

                    let c = num.toString()
                    if (isValidPosition(board, row, col, c)) {
                        board[row][col] = c;
                        if (sudoko(board)) {
                            return true
                        }
                        board[row][col] = '.'
                    }
                }
                return false;

            }
        }

    }
    return true

}


function isValidPosition(board, row, col, char) {


    for (let i = 0; i < 9; i++) {

        if (board[row][i] === char) return false;

        if (board[i][col] === char) return false;

        let boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        let boxColumn = 3 * Math.floor(col / 3) + i % 3;
        if (board[boxRow][boxColumn] === char) return false;
    }

    return true;

}
function main() {
    const board = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];

    sudoko(board);

    console.log(board);

}

main()