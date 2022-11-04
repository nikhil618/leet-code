const isIsomorphic = (s: string, t: string): boolean => {
    if (s.length !== t.length) return false;
    const charDict: any = {};
    const refDict: any = {};
    for(let i = 0; i < s.length; i++ ) {
        if((charDict[s[i]] && charDict[s[i]] !== t[i]) || (refDict[t[i]] && refDict[t[i]] !== s[i])) {
            return false;
        }
        charDict[s[i]] = t[i];
        refDict[t[i]] = s[i];
    }
    
    return true;
};

console.log("205. Isomorphic Strings\n")
console.log(`"egg" "add" ==> `, isIsomorphic("egg", "add"));
console.log(`"egg" "adc" ==> `, isIsomorphic("egg", "adc"));
console.log(`"paper" "title" ==> `, isIsomorphic("paper", "title"));
