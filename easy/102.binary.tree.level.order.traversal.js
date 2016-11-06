// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
// return its level order traversal as:
//
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  var nodes = [root];
  var result = [];
  var node, level, temp;

  while (nodes.length > 0) {
    level = [];
    temp = [];

    while (nodes.length > 0) {
      node = nodes.shift();
      level.push(node.val);

      if (node.left) {
        temp.push(node.left);
      }

      if (node.right) {
        temp.push(node.right);
      }
    }

    nodes = temp;
    result.push(level);
  }

  return result;
};
