function main() {
    const  n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4

    const rows = edges.length;
    const cols = edges[0].length;


    const dist = Array.from({ length: n }, (e) => Array(n).fill(Infinity));

    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {

            if (i === j) {
                dist[i][j] = 0;
            }
        }
    }
    for (const [u, v, w] of edges) {
        dist[u][v] = w;
        dist[v][u] = w;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                dist[i][j] = 0;
            }
        }
    }


    for (let via = 0; via < n; via++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][via] != Infinity && dist[via][j] != Infinity)
                    dist[i][j] = Math.min(dist[i][j], dist[i][via] + dist[via][j]);
            }
        }
    }

    let cityCnt = n, cityNum =- 1;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (dist[i][j] <= distanceThreshold && i!==j) {
                count++;
            }

        }   
        if(count<=cityCnt){
            cityCnt=count;
            cityNum=i
        }
            
        

    }


    return cityNum


}

main()