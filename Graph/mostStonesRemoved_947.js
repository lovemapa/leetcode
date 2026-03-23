class DisjointSets {

    constructor(vertices) {
        this.vertices = vertices;
        this.parent = Array(vertices);
        this.rank = Array(vertices).fill(0);

        for (let i = 0; i <= vertices; i++) {
            this.parent[i] = i;
        }
    }

    FindParent(node) {
        if (node === this.parent[node]) {
            return node;
        }
        return this.parent[node] =
            this.FindParent(this.parent[node]);
    }

    UnionByRank(u, v) {
        const ulUParent = this.FindParent(u);
        const ulVParent = this.FindParent(v);

        if (ulUParent === ulVParent) return;

        if (this.rank[ulUParent] < this.rank[ulVParent]) {
            this.parent[ulUParent] = ulVParent;
        }
        else if (this.rank[ulUParent] > this.rank[ulVParent]) {
            this.parent[ulVParent] = ulUParent;
        }
        else {
            this.parent[ulVParent] = ulUParent;
            this.rank[ulUParent]++;
        }
    }
}



function main() {
    const stones = [[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]];

    let maxRow = 0;
    let maxCol = 0;
    for (const [u, v] of stones) {
        maxRow = Math.max(maxRow, u);
        maxCol = Math.max(maxCol, v);
    }

    const set = new DisjointSets((maxRow + maxCol + 1));

    const stoneNodes={};
    for (const [row, col] of stones){
        const nodeRow= row;
        const nodeCol= maxRow+col+1;
        
        set.UnionByRank(nodeRow,nodeCol)
        stoneNodes[nodeCol]=1;
        stoneNodes[nodeRow]=1;
    }
    
    
    let components=0;
    for(let node in stoneNodes){
        if(set.FindParent(Number(node))===Number(node)){
            components++;
        }
    }
  return stones.length-components;

}

main()