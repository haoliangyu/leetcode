// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

function getHeight(node) {
  if (!node) {
    return 0;
  } else {
    var leftHeight = getHeight(node.left);
    var rightHeight = getHeight(node.right);

    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) {
    return true;
  }

  var nodes = [root];
  var node, diff;

  while (nodes.length > 0) {
    node = nodes.pop();
    diff = getHeight(node.left) - getHeight(node.right);

    if (diff < -1 || diff > 1) {
      return false;
    }

    if (node.left) {
      nodes.push(node.left);
    }

    if (node.right) {
      nodes.push(node.right);
    }
  }

  return true;
};
