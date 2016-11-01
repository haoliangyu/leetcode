// Given a binary tree, return all root-to-leaf paths.
//
// For example, given the following binary tree:
//
//   1
// /   \
// 2     3
// \
//  5
//
// All root-to-leaf paths are:
//
// ["1->2->5", "1->3"]

function findPath(paths, node, current) {
  current += `->${node.val}`;

  if (!node.left && !node.right) {
    paths.push(current);
  } else {
    if (node.left) {
      findPath(paths, node.left, current);
    }

    if (node.right) {
      findPath(paths, node.right, current);
    }
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) {
    return [];
  }

  if (!root.left && !root.right) {
    return [root.val.toString()];
  }

  var paths = [];

  if (root.left) {
    findPath(paths, root.left, root.val.toString());
  }

  if (root.right) {
    findPath(paths, root.right, root.val.toString());
  }

  return paths;
};
