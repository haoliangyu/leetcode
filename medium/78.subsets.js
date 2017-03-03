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
  let results = [];
  let n = nums.length;
  let total = Math.pow(2, n) - 1;

  for (let i = 0; i <= total; i++) {
    let current = [];

    for (let pointer = 1, j = 0; pointer <= i; j++) {
      if ((i & pointer) !== 0) {
        current.push(nums[j]);
      }

      pointer = pointer << 1;
    }

    results.push(current);
  }

  return results;
};
