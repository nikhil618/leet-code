

function twoSum(nums: number[], target: number): number[] {
    const obj: any = {};
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const num = target - currentNum;
        if (obj[currentNum] != null) {
            return [obj[currentNum], i];
        }
        obj[num] = i;
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));