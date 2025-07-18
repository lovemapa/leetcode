const matrixArr=[2,3,4,2];

let i=1;
let j=matrixArr.length-1;

function MCM(matrixArr,i,j){

    if(i>=j){
        return 0;
    }
    
    let min= Number.MAX_SAFE_INTEGER;
    for(let k=i;k<=j-1;k++){

        let temp= MCM(matrixArr,i,k)+ MCM(matrixArr,k+1,j)+ matrixArr[i-1]*matrixArr[k]*matrixArr[j];  
        if(temp<min){
            min=temp;
        }
    }
    return min;
}

console.log(MCM(matrixArr,i,j));
