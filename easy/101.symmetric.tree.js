// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//
// But the following [1,2,2,null,3,null,3] is not:
//
//     1
//    / \
//   2   2
//    \   \
//    3    3
//
// Note:
// Bonus points if you could solve it both recursively and iteratively.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  var nodes = [root.left, root.right];
  var nodeA, nodeB;

  do {
    nodeA = nodes.shift();
    nodeB = nodes.shift();

    if (nodeA && !nodeB) {
      return false;
    } else if (!nodeA && nodeB) {
      return false;
    } else if (nodeA && nodeB) {
      if (nodeA.val !== nodeB.val) {
        return false;
      }

      nodes.push(nodeA.left);
      nodes.push(nodeB.right);
      nodes.push(nodeA.right);
      nodes.push(nodeB.left);
    }

  } while (nodes.length > 0);

  return true;
};
