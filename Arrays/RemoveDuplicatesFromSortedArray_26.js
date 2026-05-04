function main() {

    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    let index = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[index]) {
            nums[index + 1] = nums[i];
            index++;

        }

    }
    return index+1;
}
console.log(main());

