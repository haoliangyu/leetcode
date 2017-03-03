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
  let total = 1;

  for (let i = 1; i < n; i++) {
    total = (total << 1) + 1;
  }

  for (let i = 0; i <= total; i++) {
    let current = [];

    for (let j = 0; j < n; j++) {
      if (((i >> j) & 1) === 1) {
        current.push(nums[j]);
      }
    }

    results.push(current);
  }

  return results;
};
