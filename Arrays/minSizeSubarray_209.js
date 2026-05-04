function main() {

    let target = 7, nums = [2,3,1,2,4,3]


    let minLenth = Number.MAX_SAFE_INTEGER;;

    let l = 0;
    let sum =0;

    for(let r=0;r<nums.length;r++) {

        sum=sum+nums[r];

        while(sum>=target){
            minLenth=Math.min(minLenth,r-l+1);
            sum=sum-nums[l];
            l++;
        }
        

    }

    return minLenth==Number.MAX_SAFE_INTEGER?0:minLenth



}

console.log(main());


