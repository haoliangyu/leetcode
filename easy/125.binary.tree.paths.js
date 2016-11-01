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

  root.path = root.val.toString();

  var paths = [];
  var nodes = [root];
  var node;

  while (nodes.length > 0) {
    node = nodes.pop();

    if (!node.left && !node.right) {
      paths.push(node.path);
    } else {
      if (node.right) {
        node.right.path = node.path + `->${node.right.val}`;
        nodes.push(node.right);
      }

      if (node.left) {
        node.left.path = node.path + `->${node.left.val}`;
        nodes.push(node.left);
      }
    }
  }

  return paths;
};
