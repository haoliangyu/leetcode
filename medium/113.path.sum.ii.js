// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
// For example:
// Given the below binary tree and sum = 22,
//
//              5
//             / \
//            4   8
//           /   / \
//          11  13  4
//         /  \    / \
//        7    2  5   1
//
// return
//
// [
//   [5,4,11,2],
//   [5,8,4,5]
// ]

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
 * @return {number[][]}
 */
let pathSum = function(root, sum) {
  let results = [];

  if (root === null) {
    return results;
  }

  getPath(root, sum, 0, [], results);

  return results;
};

function getPath(root, target, currentSum, current, results) {
  currentSum = currentSum + root.val;

  // leave node
  if (root.left === null & root.right === null) {
    if (currentSum === target) {
      current.push(root.val);
      results.push(current);
    }

    return;
  }


  if (root.left !== null) {
    let next = current.slice();
    next.push(root.val);
    getPath(root.left, target, currentSum, next, results);
  }

  if (root.right !== null) {
    let next = current.slice();
    next.push(root.val);
    getPath(root.right, target, currentSum, next, results);
  }
}
