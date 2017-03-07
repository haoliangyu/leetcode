// Given a collection of distinct numbers, return all possible permutations.
//
// For example,
// [1,2,3] have the following permutations:
//
// [
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  let results = [];

probe(nums.length, nums, [], 0, results);
  return results;
};

function probe(nums, length, current, index, results) {
  if (length === index) {
    results.push(current);
  } else {
    for (let i = 0; i < length; i++) {
      if (current.indexOf(nums[i]) === -1) {
        let copy = current.slice();
        copy.push(nums[i]);
        probe(nums, length, copy, index + 1, results);
      }
    }
  }
}
