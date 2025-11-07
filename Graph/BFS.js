const edges = [[1, 2], [1, 6], [2, 3], [2, 4], [6, 7], [6, 9], [7, 8], [4, 5], [5, 8]];


function BFS(adjacencyList, startNode, visited) {
    const queue = [];
    queue.push(startNode);
    while (queue.length != 0) {
        let elem = queue.shift();
        console.log(elem);
        visited[elem] = 1;
        for (let e of adjacencyList[elem]) {
            if (visited[e] === 0) {
                visited[e] = 1;
                queue.push(e);
            }
        }
    }
}

function getAdjacencyList(edges,maxNodes) {

    let adjacencyList = Array.from({ length: maxNodes + 1 }, e => new Array());

    for (let [u, v] of edges) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u)
    }

    return adjacencyList;

}

function main() {

    const maxNodes = Math.max(...edges.flat());
    const adjacencyList = getAdjacencyList(edges,maxNodes);
    const visited = new Array(maxNodes+1).fill(0);
    BFS(adjacencyList, 1, visited);

}

main()