// optimal approach 
function main() {
    let nums = [-100,-70,-60,110,120,130,160]
    nums = nums.sort((a, b) => a - b);

    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;
 
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                j++;
            }
            else if (sum > 0) {
                k--;
            }

            else {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                while (j < k && nums[j] == nums[j - 1]) j++;
                while (j < k && nums[k] == nums[k + 1]) k--;
            }
        }


    }
    return ans;
}

console.log(main());





// Better approach 
function betterApproach(nums) {
    const ans = new Set();

    for (let i = 0; i < nums.length; i++) {
        const tempSet = new Set();
        for (let j = i + 1; j < nums.length; j++) {

            const third = -(nums[i] + nums[j]);
            if (tempSet.has(-(third))) {
                const list = [nums[i], nums[j], third].sort((a, b) => a - b);
                ans.add(list.toString());

            }
            tempSet.add(nums[j]);

        }
    }

    return [...ans].map(s => s.split(',').map(Number))
}