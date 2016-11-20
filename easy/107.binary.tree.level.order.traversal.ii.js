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

  let results = [];
  traversal([root], results);

  return results;
};

function traversal(nodes, results) {
  if (nodes.length === 0) {
    return;
  }

  let values = nodes.map(node => node.val);
  results.unshift(values);

  let next = [];
  nodes.forEach(node => {
    if (node.left) {
      next.push(node.left);
    }

    if (node.right) {
      next.push(node.right);
    }
  });

  traversal(next, results);
}
