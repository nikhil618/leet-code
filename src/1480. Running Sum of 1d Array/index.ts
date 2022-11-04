const runningSum = (nums: number[]): number[] => {
    return nums.map((val, idx) => nums[idx] = idx > 0 ? nums[idx - 1] + val : val);
};

console.log("1480-Running Sum of 1d Array \n")
console.log(`[1,2,3,4] ==> `, runningSum([1,2,3,4]));
console.log(`[1,1,1,1,1] ==> `, runningSum([1,1,1,1,1]));
