// You need to find the largest value in each row of a binary tree.
//
// Example:
//
// Input:
//
//           1
//          / \
//         3   2
//        / \   \
//       5   3   9
//
// Output: [1, 3, 9]

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
let largestValues = function(root) {

  let largest = [];

  if (root === null) {
    return largest;
  }

  root.level = 0;

  let nodes = [root];
  let level = 0;
  let levelLargest = root.val;

  while (nodes.length > 0) {
    let current = nodes.shift();

    if (current.level !== level) {
      largest.push(levelLargest);
      level = current.level;
      levelLargest = current.val;
    } else if (levelLargest < current.val) {
      levelLargest = current.val;
    }

    if (current.left) {
      current.left.level = level + 1;
      nodes.push(current.left);
    }

    if (current.right) {
      current.right.level = level + 1;
      nodes.push(current.right);
    }
  }

  largest.push(levelLargest);

  return largest;
};
