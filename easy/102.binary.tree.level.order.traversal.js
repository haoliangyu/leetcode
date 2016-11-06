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

function stack(levels, levelIndex, node) {
  if (node) {
    var level = levels[levelIndex];

    if (!level) {
      level = [];
      levels.push(level)
    }

    level.push(node.val);

    stack(levels, levelIndex + 1, node.left);
    stack(levels, levelIndex + 1, node.right);
  }
}

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

  var result = [];
  stack(result, 0, root)

  return result;
};
