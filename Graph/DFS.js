const edges = [[1, 2], [1, 3], [3, 4], [3, 7], [4, 8], [7, 8], [2, 5], [2, 6]];


function DFS(adjacencyList, startNode, visited) {
    visited[startNode] = 1;
    console.log(startNode);
    for(let neighbour of adjacencyList[startNode]){

        if(!visited[neighbour]){
            DFS(adjacencyList,neighbour,visited)
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
    console.log(adjacencyList);
    
    const visited = new Array(maxNodes+1).fill(0);
    DFS(adjacencyList, 1, visited);

}

main()