// Given preorder and inorder traversal of a tree, construct the binary tree.
//
// Note:
// You may assume that duplicates do not exist in the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }

  let rootIndex = findIndex(inorder, root.val);

  let leftInorder = inorder.slice(0, rootIndex);
  let rightInorder = inorder.slice(rootIndex + 1);

  let leftPreorder = preorder.slice(1, leftInorder.length + 1);
  let rightPreorder = preorder.slice(leftInorder.length + 1);

  return node(preorder[0], buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder));
};

function node(val, left, right) {
  return { val, left, right };
}

function findIndex(array, value) {
  for (let i = 0, n = array.length; i < n; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}
