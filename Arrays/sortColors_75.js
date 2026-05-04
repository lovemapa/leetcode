function main() {
    let nums = [0, 1, 2]

    let red = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            let temp = nums[red];
            nums[red] = nums[i];
            nums[i] = temp;
            red++;
        }
    }


    let white = red;
    for (let j = red; j < nums.length; j++) {
        if (nums[j] == 1) {
            let temp = nums[white];
            nums[white] = nums[j];
            nums[j] = temp;
            white++;
        }
    }
    
    return nums;


}

main()