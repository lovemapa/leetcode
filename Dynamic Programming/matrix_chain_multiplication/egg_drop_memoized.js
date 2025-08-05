const eggs = 3, floors = 9;

const dp = new Map();


function eggDrop(eggs, floors) {
    if (floors === 0 || floors === 1) {
        return floors;
    }
 
    if (eggs === 1) {
        return floors;
    }
 
    const key = `${eggs}_${floors}`;
    if (dp.has(key)) {
        return dp.get(key);
    }
 
    let low = 1;
    let high = floors;
    let minAttempts = Number.MAX_SAFE_INTEGER;
 
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
 
        const broken = eggDrop(eggs - 1, mid - 1);     // egg breaks
        const notBroken = eggDrop(eggs, floors - mid); // egg doesn't break
 
        const worst = 1 + Math.max(broken, notBroken);
        minAttempts = Math.min(minAttempts, worst);
 
        // Binary search logic to minimize max(broken, notBroken)
        if (broken > notBroken) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
 
    dp.set(key, minAttempts);
    return minAttempts;
}

console.log(eggDrop(eggs, floors));