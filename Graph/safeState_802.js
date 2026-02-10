function main() {
    const graph = [[1,2],[2,3],[5],[0],[5],[],[]];

    const V=graph.length;

    const visited = new Array(V).fill(0);
    const pathVisited = new Array(V).fill(0);

    const output = [];
    const checkNode = new Array(V+1).fill(0);
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            eventualSafeState(visited, pathVisited, graph, i, checkNode);
        }
    }

    for (let i = 0; i < V+2; i++) {
        if (checkNode[i]) {
            output.push(i);
        }
    }
    
    return output;
    
}


function eventualSafeState(visited, pathVisited, adjacencyList, node, checkNode) {

    visited[node] = 1;
    pathVisited[node] = 1;

    for (let neighbour of adjacencyList[node]) {
        if (!visited[neighbour]) {
            if (eventualSafeState(visited, pathVisited, adjacencyList, neighbour,checkNode)) {
                checkNode[node]=0;
                return true;
            }
        }
        else if (pathVisited[neighbour]) {
            checkNode[node]=0;
            return true;
        }
    }
    checkNode[node]=1;
    pathVisited[node] = 0;
    return false;
}

main()

