// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
//
// For example:
// Given the following binary tree,
//
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
//
// You should return [1, 3, 4].

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
let rightSideView = function(root) {

  let view = [];

  /**
   * The recursive solution
   */
  function probe(level, node) {
    if (node === null) {
      return;
    }

    if (view[level] === undefined) {
      view.push(node.val);
    }

    probe(level + 1, node.right);
    probe(level + 1, node.left);
  }

  probe(0, root);

  return view;
};
