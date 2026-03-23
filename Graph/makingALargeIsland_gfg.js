class DisjointSets {

    constructor(vertices) {
        this.vertices = vertices;
        this.parent = Array(vertices);
        this.size = Array(vertices).fill(1);

        for (let i = 0; i < vertices; i++) {
            this.parent[i] = i;
        }
    }

    FindParent(node) {
        if (node === this.parent[node]) {
            return node;
        }

        return this.parent[node] = this.FindParent(this.parent[node]); // path compression
    }

    UnionBySize(u, v) {

        const parentU = this.FindParent(u);
        const parentV = this.FindParent(v);

        if (parentU === parentV) return;

        if (this.size[parentU] < this.size[parentV]) {
            this.parent[parentU] = parentV;
            this.size[parentV] += this.size[parentU];
        }
        else {
            this.parent[parentV] = parentU;
            this.size[parentU] += this.size[parentV];
        }
    }
}

function main() {
    const grid = [[1, 0], [0, 1]]


    const rows = grid.length;
    const cols = grid[0].length;
    const ds = new DisjointSets(rows * cols);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            if (grid[i][j]) {

                const rowDirection = [0, 0, -1, 1];
                const colDirection = [-1, 1, 0, 0]
                for (let k = 0; k < 4; k++) {

                    let newRow = rowDirection[k] + i;
                    let newCol = colDirection[k] + j;

                    if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && grid[newRow][newCol]) {
                        ds.UnionBySize(newRow * cols + newCol, i * cols + j);
                    }

                }
            }
        }
    }

    let ans = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            if (grid[i][j] === 0) {


                const rowDirection = [0, 0, -1, 1];
                const colDirection = [-1, 1, 0, 0]

                const set = new Set();
                for (let k = 0; k < 4; k++) {

                    let newRow = rowDirection[k] + i;
                    let newCol = colDirection[k] + j;

                    if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && grid[newRow][newCol]===1) {
                        set.add(ds.FindParent(newRow * cols + newCol));
                    }

                }

                let sum = 1;
                for (let val of set) {
                    sum = sum + ds.size[val]

                }
                ans = Math.max(ans, sum);

            }
        }
    }

    console.log(ans);
    

    for(let i=0;i<rows*cols;i++){
        if(ds.FindParent(i)===i){
            ans=Math.max(ans,ds.size[i])
        }
    }
    return ans;

}

console.log(main());

