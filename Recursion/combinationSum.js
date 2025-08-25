const candidates = [2, 3, 5], target = 8, arr = [];

const result = []
function getCombinationSum(i, list, target, candidates) {

    if (i == candidates.length) {
        if (target == 0) {
            result.push([...list]);
        }
        return;
    }

    if (candidates[i] <= target) {
        list.push(candidates[i])
        getCombinationSum(i, list, target - candidates[i], candidates);
        list.pop();
    }

    getCombinationSum(i + 1, list, target, candidates);


}

getCombinationSum(0, [], target, candidates)
console.log(result);
