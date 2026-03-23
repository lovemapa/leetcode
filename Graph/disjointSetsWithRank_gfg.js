
const n = 7;
const parent = Array(n + 1);
const rank = Array(n + 1).fill(0);

for (let i = 0; i <= n; i++) {
    parent[i] = i;
}

function FindParent(node) {

    if (node === parent[node]) {
        return node;
    }
    else {
        return parent[node] = FindParent(parent[node]);
    }

}



function UnionByRank(u, v) {

    const ulUParent = FindParent(u);
    const ulVParent = FindParent(v);

    if (ulUParent === ulVParent) return;

    if (rank[ulUParent] < rank[ulVParent]) {
        parent[ulUParent] = ulVParent;

    }
    else if (rank[ulUParent] > rank[ulVParent]) {
        parent[ulVParent] = ulUParent;
    }
    else {
        parent[ulVParent] = ulUParent;
        rank[ulUParent]++;
    }

}


UnionByRank(1, 2);
UnionByRank(2, 3);
UnionByRank(4, 5);
UnionByRank(6, 7);
UnionByRank(5, 6);
if (FindParent(3) === FindParent(7)) {
    console.log("Same");

}
else {
    console.log("Not Same");

}


UnionByRank(3, 7);

if (FindParent(3) === FindParent(7)) {
    console.log("Same");

}
else {
    console.log("Not Same");

}
console.log(FindParent(1));
console.log(FindParent(4));

