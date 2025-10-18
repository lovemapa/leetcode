

function isSafe(row, col, cheessBoard, n) {

    let dupCol = col;
    let dupRow = row;
    while (row >= 0 && col >= 0) {
        if (cheessBoard[row][col] == 'Q') return false;
        row--;
        col--;
    }

    row = dupRow;
    col = dupCol;

    while (col >= 0) {
        if (cheessBoard[row][col] == 'Q') return false;
        col--;
    }

    row = dupRow;
    col = dupCol;

    while (row <= n - 1 && col >= 0) {
        if (cheessBoard[row][col] == 'Q') return false;
        row++;
        col--;
    }
    return true;

}



function nQueen(col, cheessBoard, n, ans,leftRow,leftLowerDiagonal,leftUpperDiagonal) {


    if (col == n) {
        ans.push(cheessBoard.map(row => [...row])); // Deep copy
        return;
    }


    for (let row = 0; row < n; row++) {

        if (!leftRow[row] && !leftLowerDiagonal[n-1+col-row] && !leftUpperDiagonal[col+row]) {
            cheessBoard[row][col] = 'Q';
            leftRow[row]=1;
            leftLowerDiagonal[n-1+col-row]=1;
            leftUpperDiagonal[col+row]=1;
            nQueen(col + 1, cheessBoard, n, ans,leftRow,leftLowerDiagonal,leftUpperDiagonal)
            cheessBoard[row][col] = '.';
            leftRow[row]=0;
            leftLowerDiagonal[n-1+col-row]=0;
            leftUpperDiagonal[col+row]=0;
        }
    }

}


function main(n) {

    const cheessBoard = Array.from({ length: n }, () => new Array(n).fill('.'));

    const leftRow = new Array(n).fill(0);
    const leftUpperDiagonal = new Array(2 * n - 1).fill(0);
    const leftLowerDiagonal = new Array(2 * n - 1).fill(0);

    const ans = []
    nQueen(0, cheessBoard, n, ans,leftRow,leftLowerDiagonal,leftUpperDiagonal);

    const finalArr=[]
    ans.forEach(e=>{
        const newSubArr=[]
        e.forEach(e=>{
            newSubArr.push(e.join(''))
            
        })
        finalArr.push(newSubArr)        
       
    })
 
    console.log(finalArr);
    

    

}

main(4);