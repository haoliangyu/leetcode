// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
// For example:
// Given the below binary tree and sum = 22,
//
//              5
//             / \
//            4   8
//           /   / \
//          11  13  4
//         /  \      \
//        7    2      1
//
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }

  root.sum = root.val;

  var path = [root];
  var node;

  while (path.length > 0) {
    node = path.splice(path.length - 1, 1)[0];

    if (!node.left && !node.right && node.sum === sum) {
      return true;
    } else {
      if (node.left) {
        node.left.sum = node.sum + node.left.val;
        path.push(node.left);
      }

      if (node.right) {
        node.right.sum = node.sum + node.right.val;
        path.push(node.right);
      }
    }
  }

  return false;
};
