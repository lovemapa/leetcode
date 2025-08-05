const eggs = 3, floors = 9;

const dp = new Map();

function eggDrop(eggs, floors) {
    if (floors == 0 || floors == 1) {
        return floors;
    }

    if (eggs == 1) {
        return floors;
    }

    let key = `${eggs}_${floors}`

    if (dp.has(key)) {
        return dp.get(key)
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= floors; i++) {

        let broken = eggDrop(eggs - 1, i - 1);
        let notBroken = eggDrop(eggs, floors - i);
        let temp = 1 + Math.max(broken, notBroken);
        min = Math.min(min, temp);

    }
    dp.set(key, min)
    return min;
}

console.log(eggDrop(eggs, floors));
