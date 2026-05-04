function main() {


    let nums =[1,1,5]

    let index= -1;
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]<nums[i+1]){  
            index=i;
            break;
        }
    }

    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]>nums[index]){
            let temp= nums[i];
            nums[i]= nums[index];
            nums[index]=temp;
            break;
        }
    }

    reverseBetween(nums,index+1,nums.length-1);
    return nums;
}

function reverseBetween(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(main());

