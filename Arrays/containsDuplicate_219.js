function main() {
    const nums = [1, 0, 1, 1], k = 1

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {

        if (map.has(nums[i])) {
            if (Math.abs(i - map.get(nums[i])) <= k)
                return true;
        }
        map.set(nums[i], i);
    }
    return false
}

console.log(main());


// function main() {
//     const nums = [1, 0, 1, 1], k = 1;
 
//     const set = new Set();
 
//     for (let i = 0; i < nums.length; i++) {
 
//         // maintain window size ≤ k
//         if (i > k) {
//             set.delete(nums[i - k - 1]);
//         }
 
//         if (set.has(nums[i])) {
//             return true;
//         }
 
//         set.add(nums[i]);
//     }
 
//     return false;
// }