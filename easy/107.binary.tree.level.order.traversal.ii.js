// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
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
// return its bottom-up level order traversal as:
//
// [
//   [15,7],
//   [9,20],
//   [3]
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
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }

  root.level = 0;

  let result = [];
  let nodes = [root];

  while (nodes.length > 0) {
    let node = nodes.shift();

    if (!result[node.level]) {
      result[node.level] = [];
    }

    result[node.level].push(node.val);

    if (node.left) {
      node.left.level = node.level + 1;
      nodes.push(node.left);
    }

    if (node.right) {
      node.right.level = node.level + 1;
      nodes.push(node.right);
    }
  }

  return result.reverse();
};
