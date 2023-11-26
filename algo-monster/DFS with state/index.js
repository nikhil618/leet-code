class Node {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

function dfs(node, path, result) {
    if (!node) {
        result.push(path.join('->'));
        return;
    }
    path.push(node.val);
    if (node.children.length === 0) {
        result.push(path.join('->'));
        return;
    }    
    for (let child of node.children) {
        dfs(child, path, result);
        path.pop();
    }
    
    return;
}

function ternaryTreePaths(root) {
    const result = [];
    dfs(root, [], result);
    return result;
}

// this function builds a tree from input; you don't have to modify it
// learn more about how trees are encoded in https://algo.monster/problems/serializing_tree
function buildTree(nodes, f) {
    const val = nodes.next().value;
    const num = parseInt(nodes.next().value);
    const children = Array.from(Array(num).keys(), () => buildTree(nodes, f));
    return new Node(f(val), children);
}

function splitWords(s) {
    return s == "" ? [] : s.split(' ');
}

(function main() {
    const root = buildTree(splitWords('1 3 2 1 5 0 3 0 4 0')[Symbol.iterator](), parseInt);
    const res = ternaryTreePaths(root);
    for (const line of res) {
        console.log(line);
    }
})()