function main() {
    const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
    const V = graph.length;

    const adjacencyList = Array.from({ length: V }, (e) => []);
    let index = 0;
    for (const arr of graph) {
        for (const v of arr) {
            adjacencyList[v].push(index);
        }
        index++;
    }


    const indegree = new Array(V).fill(0);
    for (let elem of adjacencyList) {
        for (let node of elem) {
            indegree[node]++;
        }
    }
    console.log(indegree);
    
    const queue = [];
    for (let index = 0; index < indegree.length; index++) {
        if (indegree[index] === 0) {
            queue.push(index);
        }
    }
    let output = [];
    while (queue.length > 0) {
        const elem = queue.shift();
        output.push(elem);
        for (let neighbour of adjacencyList[elem]) {

            indegree[neighbour]--;
            if (indegree[neighbour] === 0) {
                queue.push(neighbour)
            }
        }

    }
    
    output=output.sort((a,b)=>a-b);
    return output;

}


main()