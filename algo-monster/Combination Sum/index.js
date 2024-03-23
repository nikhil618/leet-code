function dfs(nums, res, path, target, memo = {}) {
    if (target === 0) {
        const curr = path.sort().join();
        if (curr in memo) return;
        res.push([...path]);
        memo[curr] = true;
        return; 
    }
    if (target < 0) return;
    for (const opt of nums) {
        path.push(opt);
        dfs(nums, res, path, target - opt, memo);
        path.pop();
    }
}

function combinationSum(candidates, target) {
    const result = [];
    dfs(candidates, result, [], target)
    return result;
}

console.log(JSON.stringify(combinationSum('2 3 5'.split(' '), 8)));