class DisjointSets {

    constructor(vertices) {
        this.vertices = vertices;
        this.parent = Array(vertices);
        this.rank = Array(vertices).fill(0);

        for (let i = 0; i < vertices; i++) {
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
    const n = 10,
        adj = [
            [2, 7],
            [6, 1],
            [4, 2],
            [3, 2],
            [2, 1],
            [6, 8]]
    const set = new DisjointSets(n);

    let extraEdges = 0;

    for (const [u, v] of adj) {

        if (set.FindParent(u) === set.FindParent(v)) {
            extraEdges++;
        } else

            set.UnionByRank(u, v);
    }

    let noOfComponents = 0;
    const disconnected = []
    for (let i = 0; i < n; i++) {
        if (set.FindParent(i) == i) {
            noOfComponents++;
        }
    }

    let ans = Infinity;

    if (extraEdges >= noOfComponents - 1) {

        return extraEdges;
    }
    else
        return -1;


}

console.log(main());


