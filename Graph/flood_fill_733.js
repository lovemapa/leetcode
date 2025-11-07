function main() {
    const image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2;

    const visited= image.map(e=>[...e].fill(0));
    const currentColor=image[sr][sc];
    let output= image.map(e=>[...e]);
    DFS(sr,sc,visited,image,output,color,currentColor);
    console.log(output);
    
    return output;    


}

function DFS(row, col, visited, image, output,color,currentColor) {

    let r = image.length;
    let c = image[0].length;

    if (col >= c || col < 0 || row >= r || row < 0 || image[row][col]!=currentColor|| visited[row][col]) {
        return
    }

    visited[row][col]=1;
    output[row][col]=color;
    DFS(row + 1, col, visited, image, output,color,currentColor);
    DFS(row - 1, col, visited, image, output,color,currentColor);
    DFS(row, col + 1, visited, image, output,color,currentColor);
    DFS(row, col - 1, visited, image, output,color,currentColor);
}


main()