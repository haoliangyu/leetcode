// Given a set of distinct integers, nums, return all possible subsets.
//
// Note: The solution set must not contain duplicate subsets.
//
// For example,
// If nums = [1,2,3], a solution is:
//
// [
//  [3],
//  [1],
//  [2],
//  [1,2,3],
//  [1,3],
//  [2,3],
//  [1,2],
//  []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function(nums) {
  let results = [[]];

  if (nums.length === 0) {
    return results;
  }

  let stack = [0];
  let n = nums.length - 1;

  while (stack.length > 0) {
    let current = [];
    for (let i = 0, n = stack.length; i < n; i++) {
      current.push(nums[stack[i]]);
    }
    results.push(current);

    let last = stack[stack.length - 1];
    if (last < n) {
      stack.push(last + 1);
    } else {
      stack.pop();

      if (stack[stack.length - 1] < n) {
        stack[stack.length - 1] = stack[stack.length - 1] + 1;
      }
    }
  }

  return results;
};
