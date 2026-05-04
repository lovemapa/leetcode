// optimal approach 
function main() {
    let nums = [1, 0, -1, 0, -2, 2], target = 0
    nums = nums.sort((a, b) => a - b);

    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;

            let k = j + 1;
            let l = nums.length - 1;

            while (k < l) {
                const sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    l--;
                    while (j < k && nums[k] == nums[k - 1]) k++;
                    while (j < l && nums[l] == nums[l + 1]) l--;
                } else if (sum < target) {
                    k++;
                } else {
                    l--;
                }

            }
        }

    }
    return ans;
}

console.log(main());
