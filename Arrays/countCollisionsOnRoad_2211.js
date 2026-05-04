function main() {
    const directions = "RRRRLLRRLSSRR"
 
    let left = 0;
    let right = directions.length - 1;
 
    while (left < directions.length && directions[left] === 'L') {
        left++;
    }
 
    while (right >= 0 && directions[right] === 'R') {
        right--;
    }
 
    let collisions = 0;
 
    for (let i = left; i <= right; i++) {
        if (directions[i] == 'L'||directions[i] == 'R') {
            collisions++;
        }
    }
 
    return collisions;
}

console.log(main());

