class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function dfs(root, min_val, max_val) {
    if(!root) return true;
    if (!(root.val > min_val && root.val < max_val)) return false;
    return dfs(root.left, min_val, root.val) && dfs(root.right, root.val, max_val);
}

function validBst(root) {
    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

// this function builds a tree from input; you don't have to modify it
// learn more about how trees are encoded in https://algo.monster/problems/serializing_tree
function buildTree(nodes, f) {
    const val = nodes.next().value;
    if (val === 'x') return null;
    const left = buildTree(nodes, f);
    const right = buildTree(nodes, f);
    return new Node(f(val), left, right);
}

function splitWords(s) {
    return s == "" ? [] : s.split(' ');
}

(function main() {
    const root1 = buildTree(splitWords('6 4 3 x x 5 x x 8 x x')[Symbol.iterator](), parseInt);
    const res1 = validBst(root1);
    console.log(res1);

    const root2 = buildTree(splitWords('6 4 3 x 8 x x 5 x x 8 x x')[Symbol.iterator](), parseInt);
    const res2 = validBst(root2);
    console.log(res2);
})();
