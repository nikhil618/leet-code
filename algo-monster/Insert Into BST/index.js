class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function insertBst(bst, val) {
    if (!bst) {
        return new Node(val);
    }
    if (bst.val > val) bst.left = insertBst(bst.left, val);
    if (bst.val < val) bst.right = insertBst(bst.right, val);
    return bst;
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

function* formatTree(node) {
    if (node === null) {
        yield 'x';
        return;
    }
    yield node.val.toString();
    yield* formatTree(node.left);
    yield* formatTree(node.right);
}

(() => {
    const bst = buildTree(splitWords('6 4 3 x x 5 x x 8 x x')[Symbol.iterator](), parseInt);
    const val = parseInt(7);
    const res = insertBst(bst, val);
    console.log(Array.from(formatTree(res)).join(' '));
})();