function main() {
    const n = 4, prerequisites = [[2, 0], [2, 1], [3, 2]];

    const adjacencyList = Array.from({ length: n }, (e) => []);
    let i = 0;


    for (const [u, v] of prerequisites) {
        if (i != u || i != v) {
            adjacencyList[v].push(u);
        }
        i++;
    }

    console.log(adjacencyList);
    
    const indegree = new Array(n).fill(0);
    for (let elem of adjacencyList) {
        for (let node of elem) {
            indegree[node]++;
        }
    }
    const queue = [];
    for (let index = 0; index < indegree.length; index++) {
        if (indegree[index] === 0) {
            queue.push(index);
        }
    }
    const output = [];
    while (queue.length > 0) {
        const elem = queue.shift();
        output.push(elem);
        for (let neighbour of adjacencyList[elem]) {

            indegree[neighbour]--;
            if (indegree[neighbour]===0) {
                queue.push(neighbour)
            }
        }

    }
    
    return output.length===n
    

}

main()
