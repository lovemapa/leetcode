function main() {
    const arr = [2, 5, 7], start = 3, end = 30;
    const minArray = Array(10000).fill(Infinity);
    const queue = [];

    minArray[start] = 0;

    queue.push([start, 0]);

    while (queue.length) {
        const [node, minMul] = queue.shift();

        for (let i = 0; i < arr.length; i++) {

            let number = (arr[i] * node) % 100000;


            if (minMul + 1 < minArray[number]) {
                minArray[number] = minMul + 1;
                if (number === end) return minMul + 1;
                queue.push([number, minMul + 1]);
            }

        }
    }
    return -1;


}

console.log(main());
