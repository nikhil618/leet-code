/**
 * Definition for a binary tree node.
 */
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

// function inorderTraversal(root: TreeNode | null): number[] {
//     let solution: number[] = [];
//     let current = root;

//     while (current !== null) {
//         if (!current.left) {
//             solution.push(current.val);
//             current = current.right;
//         } else {
//             let predecessor: TreeNode | null = current.right;
//             while(predecessor?.right) {
//                 predecessor = predecessor.right;
//             }

//         }
//     }

//     return solution;
// };