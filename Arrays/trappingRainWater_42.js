function main() {
    const height = [4,2,0,3,2,5]

    const maxPrefix = new Array();
    const maxSuffix = new Array();

    let maxLeft = height[0];
    maxPrefix[0] = height[0];

    for (let i = 1; i < height.length; i++) {
        if (height[i] > maxLeft) {
            maxPrefix[i] = height[i];
            maxLeft = height[i];
        }
        maxPrefix[i] = maxLeft

    }


    let maxRight = height.at(-1);
    maxSuffix[height.length - 1] = height.at(-1);


    for (let i = height.length - 2; i >= 0; i--) {
        if (height[i] > maxRight) {
            maxSuffix[i] = height[i];
            maxRight = height[i];
        }
        maxSuffix[i] = maxRight
    }


    let total = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] < maxSuffix[i] && height[i] < maxPrefix[i]) {
            total = total + Math.min(maxSuffix[i], maxPrefix[i])- height[i];
        }
    }

    return total;

}

main()