function main() {
    const V = 6, E = 6, edges = [[1, 3], [2, 3], [4, 1], [4, 0], [5, 0], [5, 2]];

    const adjacencyList = Array.from({ length: V }, (e) => []);
    const visited = Array({ length: V }).fill(0);

    const stack = [];
    const output = [];
    let i = 0;
    for (const [u, v] of edges) {
        if (i != u || i != v) {
            adjacencyList[u].push(v);
        }
        i++;
    }

    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            DFS(i, visited, adjacencyList, stack);
        }
    }
    for (let i = stack.length - 1; i >= 0; i--) {
        output.push(stack[i]);
    }
    return output;

}


function DFS(node, visited, adjacencyList, stack) {

    visited[node] = 1;

    for (let neighbour of adjacencyList[node]) {
        if (!visited[neighbour]) {
            DFS(neighbour, visited, adjacencyList, stack);

        }
    }
    stack.push(node);
}
main()