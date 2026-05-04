function main() {
    const height =  [1, 8, 6, 2, 5, 4, 8, 3, 7];
    
    let left= 0;
    let right= height.length-1;

    let waterCollected=0;
    while(left<right){
        waterCollected =Math.max(waterCollected, Math.min(height[left], height[right]) * (right-left));
        if(height[left]<height[right]){
            left++;
        }
        else{
            right--;
        }
    }

    return waterCollected
}


function bruteForce(height) {

    let waterCollected = 0;
    for (let i = 0; i < height.length; i++) {
        let width = 0;
        let pillarOne = height[i];
        for (let j = i + 1; j < height.length; j++) {
            let pillarTwo = height[j];
            width++;
            waterCollected = Math.max(waterCollected, Math.min(pillarOne, pillarTwo) * width);
        }
    }

    return waterCollected;

}
console.log(main());

