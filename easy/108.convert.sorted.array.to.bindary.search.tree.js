// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function(nums) {

  if (nums.length === 0) {
    return null;
  }

  let nodes = [[0, nums.length - 1]];
  let tree = [];

  while (nodes.length > 0) {
    let node = nodes.shift();
    let left = node[0];
    let right = node[1];

    if (left > right) {
      tree.push(null);
      continue;
    }

    let middle = (left + right) >> 1;
    tree.push(nums[middle]);

    nodes.push([left, middle - 1]);
    nodes.push([middle + 1, right]);
  }

  while (tree[tree.length - 1] === null) {
    tree.pop();
  }

  return tree;
};
