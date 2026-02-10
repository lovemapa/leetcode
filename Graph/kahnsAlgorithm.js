function main() {
    const V = 6, E = 6, graph = [[1, 3], [2, 3], [4, 1], [4, 0], [5, 0], [5, 2]]

    const adjacencyList = Array.from({ length: V }, (e) => []);

    let i = 0;

    for (const [u, v] of graph) {
        if (i != u || i != v) {
            adjacencyList[u].push(v);
        }
        i++;
    }

    const indegree = new Array(V).fill(0);
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
            if (indegree[neighbour] === 0) {
                queue.push(neighbour)
            }
        }

    }
    console.log(output);

    return output;

}


main()