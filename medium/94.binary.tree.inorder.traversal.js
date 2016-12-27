// Given a binary tree, return the inorder traversal of its nodes' values.
//
// For example:
// Given binary tree [1,null,2,3],
//
//    1
//     \
//      2
//     /
//    3
//
// return [1,3,2].
//
// Note: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

  let current = root;
  let result = [];

  if (root === null) {
    return result;
  }

  while (current !== undefined) {

    if (current.visited === true) {
      current = current.parent;
      continue;
    }

    if (current.left !== null && current.left.visited !== true) {
      current.left.parent = current;
      current = current.left;
    } else {
      result.push(current.val);
      current.visited = true;

      if (current.right !== null && current.right.visited !== true) {
        current.right.parent = current;
        current = current.right;
      }
    }
  }

  return result;
};
