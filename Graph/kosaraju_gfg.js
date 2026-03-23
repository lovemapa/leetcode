function main() {
    const V = 5, E = 5, edges = [[0, 2], [0, 3], [1, 0], [2, 1], [3, 4]];

    const adjacencyList = Array.from({ length: V }, e => []);
    const reverseAdjList = Array.from({ length: V }, e => []);

    let visited = Array(V).fill(0);
    let revVis = Array(V).fill(0);
    for (const [u, v] of edges) {
        adjacencyList[u].push(v);
    }


    const stack = [];

    for (let node = 0; node < V; node++) {
        if (!visited[node]) {
            DFS(adjacencyList, node, visited, stack);
        }
    }
    reversEdges(edges, reverseAdjList);

    visited = Array(V).fill(0);

    let scc = 0;

    while (stack.length) {
        const elem = stack.pop();
        if (!visited[elem]) {
            scc++;
            DFSTranspose(reverseAdjList, elem, visited);
        }
    }

    return scc;

}

function DFS(adjacencyList, startNode, visited, stack) {

    visited[startNode] = 1;
    for (let neighbour of adjacencyList[startNode]) {

        if (!visited[neighbour]) {
            DFS(adjacencyList, neighbour, visited, stack)
        }
    }
    stack.push(startNode);

}

function reversEdges(edges, reverseAdjList) {
    for (const [u, v] of edges) {
        reverseAdjList[v].push(u)
    }

}


function DFSTranspose(adjacencyList, startNode, visited) {

    visited[startNode] = 1;
    for (let neighbour of adjacencyList[startNode]) {

        if (!visited[neighbour]) {
            DFSTranspose(adjacencyList, neighbour, visited)
        }
    }

}

console.log(main());

