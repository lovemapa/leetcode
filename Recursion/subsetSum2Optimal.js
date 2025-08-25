const arr = [1, 2, 2];

const result = [];

function subsetSum2Optimal(index, list) {
    result.push([...list])
    for (let i = index; i < arr.length ; i++) {
        if (i != index && arr[i] == arr[i -1]) continue;
        list.push(arr[i]);
        subsetSum2Optimal(i + 1, list);
        list.pop();
    }

}


arr.sort((a,b)=>a-b)
subsetSum2Optimal(0, []);
console.log(result);
