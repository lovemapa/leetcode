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
    const n = 4,
        m = 5,
        k = 4,
        A = [[0, 0], [1, 1], [2, 2], [3, 3]];

    const area = Array.from({ length: n }, e => Array(m).fill(0));
    const visited = Array.from({ length: n }, e => Array(m).fill(0));

    const set = new DisjointSets(n * m);

    const rows = area.length;
    const cols = area[0].length;

    let count = 0;
    const ans = [];
    for (const [u, v] of A) {

        if (visited[u][v]) {
            ans.push(count);
            continue;
        }
        
        visited[u][v]=1;
        count++;
        
        const ld = [0, 0, -1, 1];
        const rd = [-1, 1, 0, 0]
        for (let r = 0; r < 4; r++) {
            let newRow = ld[r] + u;
            let newCol = rd[r] + v;

            if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && visited[newRow][newCol]) {

                if (set.FindParent(u * cols + v) !== set.FindParent(newRow * cols + newCol)) {
                    set.UnionByRank(u * cols + v, newRow * cols + newCol);
                    count--;
                    visited[newRow][newCol] = 1;

                }

            }

        }
        ans.push(count);
    }

    return ans;


}

main()