function main() {
    const V = 4, E = 4, edges = [[0, 1], [2,4], [1, 2], [1, 3],[3,4],[4,5]];
    const maxLength = Math.max(...edges.flat());
    const adjacencyList =  Array.from({length:maxLength+1},(e)=>[])

    const visited = new Array(maxLength + 1).fill(0);

    for (const [u, v] of edges) {
        console.log(u,v,adjacencyList);
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
    }

    for (let i = 0; i <= maxLength; i++) {

        if (!visited[i]) {
            if (checkCycleUsingDFS(adjacencyList, visited,i,-1)) {
                return true;
            }
        }
    }
    return false;
}

function checkCycleUsingDFS(adjacencyList, visited, src,parent) {

    visited[src]=1;

    for(let neighbours of adjacencyList[src]){
        if(!visited[neighbours]){
           return checkCycleUsingDFS(adjacencyList,visited,neighbours,src);
        }
        else if(parent!=neighbours){
            return true;
        }
    }
    return false;
}
console.log(main());

