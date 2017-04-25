// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
//
// An example is the root-to-leaf path 1->2->3 which represents the number 123.
//
// Find the total sum of all root-to-leaf numbers.
//
// For example,
//
//     1
//    / \
//   2   3
//
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
//
// Return the sum = 12 + 13 = 25.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let sumNumbers = function(root) {
  if (root === null) {
    return 0;
  }

  return getSum(root, root.val);
};

function getSum(node, sum) {
  if (node.left === null && node.right === null) {
    return sum;
  }

  return (node.left !== null ? getSum(node.left, sum * 10 + node.left.val) : 0) +
         (node.right !== null ? getSum(node.right, sum * 10 + node.right.val) : 0);
}
