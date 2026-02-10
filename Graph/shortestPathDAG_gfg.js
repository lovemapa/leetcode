function main() {

    const V = 6, E = 7, edges = [[0,1,2], [0,4,1], [4,5,4], [4,2,2], [1,2,3], [2,3,6], [5,3,1]]
    const adjacencyList = Array.from({ length: V }, e => []);

    for (const [u, v, w] of edges) {
        adjacencyList[u].push([v, w]);
    }


    const visited = Array.from({ length: V }).fill(0);
    const distance = Array.from({ length: V }).fill(Number.MAX_SAFE_INTEGER);

    const stack = [];
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            DFS(i, visited, adjacencyList, stack)
        }
    }

    const toposort = []

    for (let i = 0; i < V; i++) {
        toposort[V - i - 1] = stack[i];
    }

    distance[0] = 0;
    for (let v of toposort) {
        for (let neighbour of adjacencyList[v]) {
            if (distance[v] + neighbour[1] < distance[neighbour[0]]) {
                distance[neighbour[0]] = distance[v] + neighbour[1];
            }

        }
    }

    for(let i=0;i<distance.length;i++){
        if(distance[i]===Number.MAX_SAFE_INTEGER){
            distance[i]=-1;
        }
    }
    
    return distance;    

}

function DFS(node, visited, adjacencyList, stack) {

    visited[node] = 1;

    for (let neighbours of adjacencyList[node]) {

        if (!visited[neighbours[0]]) {
            DFS(neighbours[0], visited, adjacencyList, stack);
        }
    }
    stack.push(node);

}

main()
