// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements that appear twice in this array.
//
// Could you do it without extra space and in O(n) runtime?
//
// Example:
//
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [2,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDuplicates = function(nums) {

  let results = [];

  for (let i = 0, n = nums.length, index; i < n; i++) {
    index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      results.push(index + 1);
    }

    nums[index] = -nums[index];
  }

  return results;
};
