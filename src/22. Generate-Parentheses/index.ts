function generateParenthesis(n: number): string[] {
    const solution: string[] = [];

    const generator = (leftCount: number, rightCount: number, subStr: string) => {
        if(leftCount > rightCount) return;
        if (!leftCount && !rightCount) {
            solution.push(subStr);
        }
        if (leftCount > 0) generator(leftCount - 1, rightCount, subStr + '(');
        if (rightCount > 0) generator(leftCount, rightCount - 1, subStr + ')');
    }

    generator(n, n, '');
    return solution;
};

// Expected output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(3));