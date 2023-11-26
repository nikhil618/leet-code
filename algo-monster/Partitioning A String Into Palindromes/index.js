function isPalindrome(s) {
    let l = 0, r = s.length - 1;
    
    while(l < r) {
        if(s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}

function dfs(str, ans, startIndex, path) {
    if(startIndex === str.length) {
        ans.push([...path]);
        return;
    }
    
    for(let end = startIndex + 1; end < str.length + 1; end++) {
        const subStr = str.substring(startIndex, end);
        if (isPalindrome(subStr)) {
            path.push(subStr);
            dfs(str, ans, end, path);
            path.pop();
        }
    }
    return;
}

function partition(s) {
    const ans = [];
    dfs(s, ans, 0, []);
    return ans;
}


console.log(JSON.stringify(partition('aaa')));