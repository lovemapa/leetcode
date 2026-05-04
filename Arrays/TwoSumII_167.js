function main() {
    const numbers = [2, 7, 11, 15], target = 9
    let l = 0, r = numbers.length - 1;


    while (l < r) {

        if (numbers[l] + numbers[r] == target) {
            return [l + 1, r + 1];
        }
        else if (numbers[l] + numbers[r] > target) {
            r--;
        }
        else {

            l++;
        }

    }
}
console.log(main());


