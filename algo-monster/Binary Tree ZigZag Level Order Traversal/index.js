class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function zigZagTraversal(root) {
    const queue = [root]
    const result = [];
    let curr = 0;
    while(queue.length > 0) {
        const len = queue.length;
        const lvl = [];
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            lvl.push(node.val);
            if (curr % 2 === 0) {
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            } else {
                if(node.right) queue.push(node.right);
                if(node.left) queue.push(node.left);
            }
        }
        result.push(lvl);
        curr++;
    }
    return result;
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
    const tree = buildTree(splitWords('1 2 4 x 7 x x 5 x 8 x x 3 x 6 x x')[Symbol.iterator](), parseInt);
    console.log(Array.from(formatTree(tree)).join(' '));
    const res = zigZagTraversal(tree);
    console.log(Array.from(formatTree(res)).join(' '));
})();
