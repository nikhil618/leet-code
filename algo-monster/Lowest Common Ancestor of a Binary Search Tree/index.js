class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function lcaOnBst(bst, p, q) {
    if (!bst) return -1;
    const val = bst.val;
    if (p < val && q < val) return lcaOnBst(bst.left, p, q);
    else if (p > val && q > val) return lcaOnBst(bst.right, p, q);
    else if (p === val || q === val) return bst.val;
    else return bst.val;
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

(() => {
    const bst = buildTree(splitWords('6 2 0 x x 4 3 x x 5 x x 8 7 x x 9 x x')[Symbol.iterator](), parseInt);
    const res = lcaOnBst(bst, 2, 8);
    console.log(res);
    return res;
})();