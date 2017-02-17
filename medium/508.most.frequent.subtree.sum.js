// Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.
//
// Examples 1
// Input:
//
//  5
// /  \
// 2   -3
//
// return [2, -3, 4], since all the values happen only once, return all of them in any order.
//
// Examples 2
// Input:
//
//  5
// /  \
// 2   -5
//
// return [2], since 2 happens twice, however -5 only occur once.
//
// Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.

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
let findFrequentTreeSum = function(root) {

  let count = {};

  function getSubTreeSum(node) {
    if (node === null) {
      return 0;
    }

    let leftSum = getSubTreeSum(node.left);
    let rightSum = getSubTreeSum(node.right);
    let sum = node.val + leftSum + rightSum;
    let current = count[sum];

    if (current === undefined) {
      count[sum] = 1;
    } else {
      count[sum] = current + 1;
    }

    return sum;
  }

  getSubTreeSum(root);

  let maxCount = -Infinity;
  for (let val in count) {
    let current = count[val];

    if (current > maxCount) {
      maxCount = current;
    }
  }

  let result = [];
  for (let val in count) {
    if (count[val] === maxCount) {
      result.push(Number(val));
    }
  }

  return result;
};
