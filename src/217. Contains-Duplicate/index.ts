const containsDuplicate = (nums: number[]): boolean => {
    const hashSet = new Set();

    for(let num of nums) {
        if (hashSet.has(num)) {
            return true;
        }
        hashSet.add(num);
    }

    return false;
};

console.log("217-Contains-Duplicate \n")
console.log('[1,1,1,3,3,4,3,2,4,2] ==> ', containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log('[1,2,3,4] ==> ', containsDuplicate([1,2,3,4]));