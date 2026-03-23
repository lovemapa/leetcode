function main() {
    const  n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]

    const adjacencyList = Array.from({ length: n }, e => []);

    const visited = new Array(n).fill(0);
    const lowest = new Array(n);
    const entry = new Array(n);

    for (const [u, v] of connections) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
    }


    let timer = 0;
    let bridges = [];
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            DFS(i, -1);
        }
    }

    function DFS(node, parent) {
        timer++;
        visited[node] = 1;
        entry[node] = lowest[node] = timer;

        for (let neighbour of adjacencyList[node]) {

            if (parent === neighbour) {
                continue;
            }

            if (visited[neighbour] === 0) {
                console.log(`DFS called for ${neighbour}`);
                
                DFS(neighbour,node);
                lowest[node] = Math.min(lowest[neighbour], lowest[node]);

                if (lowest[neighbour] > entry[node]) {
                    bridges.push([node, neighbour]);
                }

            }
            else {
                lowest[node] = Math.min(lowest[neighbour], lowest[node]);
            }
        }

    }

    return bridges;
}


console.log(main());

