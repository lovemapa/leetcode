
const n = 7;
const parent = Array(n + 1);
const size = Array(n + 1).fill(1);

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



function UnionBysize(u, v) {

    const ulUParent = FindParent(u);
    const ulVParent = FindParent(v);

    if (ulUParent === ulVParent) return;

    if (size[ulUParent] < size[ulVParent]) {
        parent[ulUParent] = parent[ulVParent];
        size[ulVParent] += size[ulUParent];
    }
    else {
        parent[ulVParent] = ulUParent;
        size[ulUParent] += size[ulVParent];
    }

}


UnionBysize(1, 2);
UnionBysize(2, 3);
UnionBysize(4, 5);
UnionBysize(6, 7);
UnionBysize(5, 6);
UnionBysize(3, 7);
console.log(size);
