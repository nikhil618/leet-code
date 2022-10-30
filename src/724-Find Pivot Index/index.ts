const pivotIndex = (nums: number[]): number => {
    let [currentSum, i] = [0, 0];
    const totalSum = nums.reduce((sum, current) => sum + current, 0);
    while (i < nums.length) {
        if (currentSum === totalSum - nums[i] - currentSum) {
            return i;
        }
        currentSum += nums[i];
        i++;
    }

    return -1;
};

console.log("724-Find Pivot Index \n")
console.log(`[1,7,3,6,5,6] ==> `, pivotIndex([1,7,3,6,5,6]));
console.log(`[1,2,3] ==> `, pivotIndex([1,2,3]));
console.log(`[2,1,-1] ==> `, pivotIndex([2,1,-1]));
