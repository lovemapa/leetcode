const isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]


function DFS(adjacencyList, startNode, visited) {

    visited[startNode] = 1;
    for (let neighbour of adjacencyList[startNode]) {

        if (visited[neighbour]===0) {
            DFS(adjacencyList, neighbour, visited)
        }
    }

}

function getAdjacencyList(isConnected, maxNodes) {

    let adjacencyList = Array.from({ length: maxNodes }, e => new Array());

    for (let i = 0; i < isConnected.length; i++) {
        for (let j = i+1; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1 && i!=j) {

                adjacencyList[i].push(j);
                adjacencyList[j].push(i)
            }

        }
    }
    return adjacencyList;

}




function main() {

    const maxNodes = isConnected.length;
    const adjacencyList = getAdjacencyList(isConnected, maxNodes);
    console.log(adjacencyList);
    
    const visited = new Array(maxNodes).fill(0);
    let count = 0;
    for (let k = 0; k < maxNodes; k++) {
        if (visited[k]===0) {
            count++;
            DFS(adjacencyList, k, visited);
        }
    }
    console.log(count);
    
}

main()