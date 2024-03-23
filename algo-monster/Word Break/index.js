function wordBreak(s, words) {
    
    const dfs = (res, path, memo={}) => {
        if(res) return res;
        const currWord = path.join('');
        if (currWord.length > s.length) return false;
        if (currWord in memo) return memo[currWord];
        if (currWord === s) return true;
        
        for (let w of words) {
            path.push(w);
            res = res || dfs(res, path, memo);
            path.pop();
        }
        
        memo[currWord] = res;
        
        return res;        
    };
    return dfs(false, []);
}

console.log(wordBreak('algomonster', ['algo', 'monster']));
console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', 'a aa aaa aaaa aaaaa aaaaaa aaaaaaa aaaaaaaa aaaaaaaaa aaaaaaaaaa'.split(' ')));