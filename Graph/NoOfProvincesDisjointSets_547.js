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

    const isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
    const rows = isConnected.length;
    const cols = isConnected[0].length;

    const set= new DisjointSets(isConnected.length);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(isConnected[i][j]){
                set.UnionByRank(i,j);
            }
        }
    }

    let count=0;
    for(let i=0;i<isConnected.length;i++){
        if(set.parent[i]===i)
            count++;
    } 
    return count;
    
}


main()