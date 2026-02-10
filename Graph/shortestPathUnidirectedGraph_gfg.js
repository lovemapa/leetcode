function main() {
    const V = 3, edges = [[0, 1, 1], [1, 2, 3], [0, 2, 6]], src = 2

    const adjacencyList = Array.from({ length: V }, e => []);


    for (const [u, v] of edges) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
    }

    let distance = Array.from({ length: V }).fill(-1);
    const queue = [];
    queue.push(src);
    distance[src] = 0;

    
    while (queue.length > 0) {
        const elem = queue.shift();

        for (let neighbours of adjacencyList[elem]) {
            
            if (distance[neighbours]===-1) {
                distance[neighbours] =  distance[elem] +1;
                queue.push(neighbours)
            }

        }
    }
    
    console.log(distance);
    
    return distance;


}

main()