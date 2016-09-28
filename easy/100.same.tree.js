// Given two binary trees, write a function to check if they are equal or not.
//
// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  } else if ((!p && q) || (!q && p)) {
    return false;
  }

  var nodeListP = [p];
  var nodeListQ = [q];

  while (nodeListQ.length > 0 && nodeListP.length > 0) {
    var currentP = nodeListP.pop();
    var currentQ = nodeListQ.pop();

    if (currentP && currentQ) {

      if (currentP.val !== currentQ.val) {
        return false;
      }

      nodeListQ.push(currentQ.left);
      nodeListQ.push(currentQ.right);

      nodeListP.push(currentP.left);
      nodeListP.push(currentP.right);
    } else if (!currentP && !currentQ) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};
