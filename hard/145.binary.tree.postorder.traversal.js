// Given a binary tree, return the postorder traversal of its nodes' values.
//
// For example:
// Given binary tree {1,#,2,3},
//
//    1
//     \
//      2
//     /
//    3
//
// return [3,2,1].
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
let postorderTraversal = function(root) {
  let results = [];

  if (root === null) {
    return results;
  }

  let nodes = [root];

  while (nodes.length > 0) {
    let node = nodes.pop();
    results.unshift(node.val);

    if (node.left) {
      nodes.push(node.left);
    }

    if (node.right) {
      nodes.push(node.right);
    }
  }

  return results;
};
