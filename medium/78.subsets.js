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

  function pickOrNot(index, current) {
    if (index !== n) {
      pickOrNot(index + 1, current);

      let picked = current.slice();
      picked.push(nums[index]);
      pickOrNot(index + 1, picked);
    } else {
      results.push(current);
    }
  }

  pickOrNot(0, []);

  return results;
};
