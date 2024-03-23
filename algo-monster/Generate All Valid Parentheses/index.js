function generateParentheses(n) {
    const result = [];
    const dfs = (startIndex, res, path, openCount, closeCount) => {
        if (openCount > n) return;
        if(openCount === n && openCount === closeCount) {
            res.push(path.join(''));
        }
        if(openCount < closeCount) return;

        path.push('(');
        dfs(startIndex + 1, res, path, openCount + 1, closeCount);
        path.pop();

        path.push(')');
        dfs(startIndex + 1, res, path, openCount, closeCount + 1);
        path.pop();
        
        return
    };
    
    dfs(0, result, [], 0, 0);
    return result;
}

generateParentheses(3);