function countInversions(){
    const arr=[5,3,2,4,1];


    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]!=arr[j] && arr[i]>arr[j]){
                console.log(arr[i],arr[j]);
                
            }
        }
    }
}

countInversions()