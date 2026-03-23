function main() {
    const V = 7, edges = [[4, 5, 10], [5, 3, 1]], src = 0

    const distances = Array(V).fill(Infinity);
    const adjacenyList= Array.from({length:V},e=>[]);

    for(const [u,v,w] of edges){
        adjacenyList[u].push([V,w]);
    }

    console.log(adjacenyList);
    

    distances[src] = 0;

    for (let v = 0; v < V; v++) {

        for (const [u, v, wt] of edges) {
            if (distances[u] + wt < distances[v]) {
                distances[v] = distances[u] + wt;
            }
        }
    }
    const result = distances.every(e => e >= 0);

    if (result) {
        console.log(distances);
        return distances
    }
    else {
        console.log(-1);
        return [-1];
    }

}
main()
