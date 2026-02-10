function main() {
    const graph =[[1,3],[0,2],[1,3],[0,2]]

    const maxNods = Math.max(...graph.flat());

    const colors = Array.from({ length: maxNods + 1 }).fill(-1);

    for (let i = 0; i < graph.length; i++) {
        if (colors[i] == -1) {
            if (!DFS(graph, colors, i, 1)) return false;
        }
    }
    return true;
}


function DFS(graph, colors, node, col) {
    for (let neighbour of graph[node]) {
        if (colors[neighbour] === -1) {
            colors[neighbour] = 1 - col;
            if (!DFS(graph, colors, neighbour,1-col)) return false;
        }
        else if (colors[neighbour] === col) {
            return false;
        }
    }
    return true;

}


console.log(main());
