    let candidates = [10,1,2,7,6,1,5], target = 8, arr = [];

    candidates= candidates.sort((a,b)=>a-b);
    const s= new Set();
    function getCombinationSum(i, list, target, candidates) {

        if (i == candidates.length) {
            if (target == 0) {
                s.add(JSON.stringify([...list]));
            }
            return;
        }

        if (candidates[i] <= target) {
            list.push(candidates[i])
            getCombinationSum(i+1, list, target - candidates[i], candidates);
            list.pop()
        }

        getCombinationSum(i + 1, list, target, candidates);


    }

    getCombinationSum(0, [], target, candidates)
    console.log([...s].map(x=>JSON.parse(x)));
