const missingNumber = (nums: number[]): number => {
    let num = nums.length;
    for(let i=0; i < nums.length; i++) {
        num ^= i ^ nums[i];
    }
    return num;
};

console.log("268-Missing Number \n")
console.log(`[3,0,1] ==> `, missingNumber([3,0,1]));
console.log(`[9,6,4,2,3,5,7,0,1] ==> `, missingNumber([9,6,4,2,3,5,7,0,1]));
