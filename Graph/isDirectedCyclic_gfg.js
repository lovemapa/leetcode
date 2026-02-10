function main() {
    const V = 5, E = 3, edges = [[3, 0], [4, 2], [1, 2]];

    const visited = new Array(V).fill(0);
    const pathVisited = new Array(V).fill(0);

    const adjacencyList = Array.from({ length: V }, (e) => []);

    for (const [u, v] of edges) {
        adjacencyList[u].push(v);

    }

    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            if (DFS(visited, pathVisited, adjacencyList, i)) return true;
        }
    }
    return false;

}


function DFS(visited, pathVisited, adjacencyList, node) {

    visited[node] = 1;
    pathVisited[node] = 1;

    for (let neighbour of adjacencyList[node]) {
        if (!visited[neighbour]) {
            if (DFS(visited, pathVisited, adjacencyList, neighbour)) return true;
        }
        else if (pathVisited[neighbour]) {
            return true;
        }
    }
    pathVisited[node] = 0;
    return false;
}

console.log(main());

