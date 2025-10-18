function permuation(arr, frequency, list, result) {

    if (arr.length == list.length){
        result.push([...list]);
        return;
    }
    
    for(let i=0;i<arr.length;i++){
        if(!frequency[i]){
            frequency[i]=true;
            list.push(arr[i]);
            permuation(arr,frequency,list,result);
            frequency[i]=false;
            list.pop()
        }
    }

}

function main() {
    const arr = [1, 2, 3];
    const result = [];
    const frequency = Array(arr.length).fill(false);
    const list = [];
    permuation(arr, frequency, list, result);
    console.log(result);
    

}

main()