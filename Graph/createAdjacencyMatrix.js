const edges = [[1, 2], [1, 3], [2, 4], [3, 4], [2, 5], [4, 5]];

let adjacencyMatrix = Array.from({ length: edges.length }, e => new Array(edges.length).fill(0));

let adjacencyList = Array.from({ length: edges.length }, e => new Array());
console.log(adjacencyList);

for (let [u, v] of edges) {

    adjacencyMatrix[u][v] = 1;
    adjacencyMatrix[v][u] = 1;

}

for (let [u, v] of edges) {
    adjacencyList[u].push(v);
    adjacencyList[v].push(u)
}
