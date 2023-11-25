class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function dfs(root, str = []) {
    if(root === null) {
        str.push('x');
        return str;
    }
    str.push(root.val);
    dfs(root.left, str);
    dfs(root.right, str);
    return str;
}


function serialize(root) {
    const res = dfs(root).join(' ');
    console.log(res);
    return res;
}

function* getNodes(str) {
    const nodeArr = str.split(' ');
    for (let nodeStr of nodeArr) {
        yield nodeStr;
    }
}

function dfsDeserializer(nodeGen) {
    const curr = nodeGen.next().value;
    if (!curr || curr === 'x') return null;
    const node =    new Node(+curr);
    node.left = dfsDeserializer(nodeGen);
    node.right = dfsDeserializer(nodeGen);
    return node;
}

function deserialize(s) {
    const res = dfsDeserializer(getNodes(s));
    console.log(res)
    return res;
}


const root = deserialize('6 4 3 x x 5 x x 8 x x');
serialize(root);