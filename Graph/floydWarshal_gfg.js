function main() {

    const maxVal = Math.pow(10, 8);
    const dist = [
        [0, -1, 5, 100000000],
        [6, 0, 5, 1],
        [1, 5, 0, 100000000],
        [6, 100000000, 2, 0]
    ]

    const n = dist.length;

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
                if (dist[i][via] != maxVal && dist[via][j] != maxVal)
                    dist[i][j] = Math.min(dist[i][j], dist[i][via] + dist[via][j]);
            }
        }
    }

    console.log(dist);




}

main();