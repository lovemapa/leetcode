function main() {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (k < 2 || nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;

}

console.log(main());

