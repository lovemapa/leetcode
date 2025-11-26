function main() {
    const graph = [[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]]

    
    const maxNods = Math.max(...graph.flat());

    const colors = Array.from({ length: maxNods + 1 }).fill(-1);

    for(let i=0;i<graph.length;i++){
        if(colors[i]==-1){
            if(!BFS(graph, colors, i)) return false;
        }
    }
    return true;
}


function BFS(graph, colors, node) {

    const queue = [];
    colors[node] = 0;

    queue.push(node);

    while (queue.length > 0) {

        const elem = queue.shift();

        for (const neighbour of graph[elem]) {

            if (colors[neighbour] === -1) {
                colors[neighbour] =  1- colors[elem];
                queue.push(neighbour);
            }
            else if(colors[neighbour]===colors[elem]){
                return false;
            }

        }
    }
    return true
}

console.log(main());

