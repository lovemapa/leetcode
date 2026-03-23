function main() {
    const n = 3, flights = [[0,1,2],[1,2,1],[2,0,10]], src = 1, dst = 2, k = 1;

    const distances = Array.from({length:n}).fill(Infinity);


    const adjacencyList = Array.from({ length: n }, (e) => []);

    for (const [u, v, cost] of flights) {
        adjacencyList[u].push([v, cost]);
    }

    const queue = [];
    queue.push([0, src, 0]);
    distances[src] = 0;


    while(queue.length){

        let [stops,node,dist]= queue.shift();
       
        if(stops> k){
            continue;
        }
        stops++;
        for( const [adjNode,cost] of adjacencyList[node]){

            
            const newCost= dist+ cost;

            if(newCost< distances[adjNode] && stops<k){
                distances[adjNode]= newCost;
                queue.push([stops,adjNode,newCost]);
                
            }
        }
    }
    
    if(distances[dst]===Infinity){
        return -1;
    }
    return distances[dst]

}

console.log(main());
