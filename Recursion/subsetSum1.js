const arr = [2, 3, 5];
const s= new Set();

function subsetSum(i,sum) {

    if (i == arr.length) {
        s.add(sum)
        return;
    }
   
    subsetSum(i+1,sum+arr[i]);
    subsetSum(i+1,sum);


}

subsetSum(0, 0);
console.log([...s].sort((a,b)=>b-a));

