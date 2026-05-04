function main() {
    const nums = [1, 12, -5, -6, 50, 3], k = 4


    if (nums.length === 1) {
        return nums[0]
    }

  
    let sum = 0;
    for (let inc = 0; inc < k; inc++) {
        sum = sum + nums[inc];
    }

    let maxSum = sum;

    for (let inc = k; inc < nums.length; inc++) {
        sum=sum+nums[inc]-nums[inc-k]
        maxSum = Math.max(maxSum, sum / k);
    }

    return maxSum
}

// brute force
function findMaxAverage(nums, k) {

    if (nums.length === 1) {
        return nums[0]
    }

    let i = 0;
    let j = i + k;

    let maxSum = Number.MIN_SAFE_INTEGER;
    while (j <= nums.length) {

        let sum = 0;
        for (let inc = i; inc < j; inc++) {
            sum = sum + nums[inc];
        }
        maxSum = Math.max(maxSum, sum / k);
        i++;
        j++;

    }
    return maxSum
};
console.log(main());

