// Given a binary tree, find the leftmost value in the last row of the tree.
//
// Example 1:
//
// Input:
//
//    2
//   / \
//  1   3
//
// Output:
// 1
//
// Example 2:
//
// Input:
//
//        1
//       / \
//      2   3
//     /   / \
//    4   5   6
//       /
//      7
//
// Output:
// 7
//
// Note: You may assume the tree (i.e., the given root node) is not NULL.

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
let findBottomLeftValue = function(root) {

  root.level = 0;

  let nodes = [root];
  let currentLevel, leftmost;

  while (nodes.length > 0) {
    let node = nodes.shift();

    if (node.level !== currentLevel) {
      leftmost = node.val;
      currentLevel = node.level;
    }

    if (node.left !== null) {
      node.left.level = currentLevel + 1;
      nodes.push(node.left);
    }

    if (node.right !== null) {
      node.right.level = currentLevel + 1;
      nodes.push(node.right);
    }
  }

  return leftmost;
};
