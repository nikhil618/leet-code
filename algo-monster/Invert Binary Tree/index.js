class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function invertBinaryTree(tree) {
    if (!tree) return null;
    [tree.left, tree.right] = [tree.right, tree.left];
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    return tree;
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

function main() {
    const tree = buildTree(splitWords('1 2 4 x x 5 6 x x x 3 x x')[Symbol.iterator](), parseInt);
    console.log(Array.from(formatTree(tree)).join(' '));
    const res = invertBinaryTree(tree);
    console.log(Array.from(formatTree(res)).join(' '));
}

main();