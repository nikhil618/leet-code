const isSubsequence = (s: string, t: string): boolean => {
    if (s.length > t.length) return false;
    let index = 0;
    for (let char of t) {
        if(s[index] === char) {
            index++;
        }
    }
    
    return index === s.length;
};

console.log("392. Is Subsequence \n")
console.log(`"abc" "caadbc" ==> `, isSubsequence("abc", "caadbc"));
console.log(`"def" "caadbc" ==> `, isSubsequence("def", "caadbc"));
