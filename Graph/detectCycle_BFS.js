function main() {
    const V = 4, E = 4, edges = [[0, 1], [1, 2], [2, 3]];
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
            if (checkCycle(adjacencyList, visited,i)) {
                return true;
            }
        }
    }
    return false;
}

function checkCycle(adjacencyList, visited, src) {

    let queue = [];

    queue.push({ elem: src, from: -1 });

    while (queue.length > 0) {

        const { elem, from } = queue.shift();
        visited[elem] = 1;

        for (let neighbours of adjacencyList[elem]) {

            if (!visited[neighbours]) {
                visited[neighbours] = 1;
                queue.push({ elem: neighbours, from: elem })
            }
            else if (neighbours !== from) {  
                return true;
            }

        }

    }

    return false;

}
console.log(main());

