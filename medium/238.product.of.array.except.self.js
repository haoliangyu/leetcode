// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//
// Solve it without division and in O(n).
//
// For example, given [1,2,3,4], return [24,12,8,6].
//
// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {

  let left = new Array(nums.length);
  left[0] = 1;

  for (let i = 0, n = nums.length - 1; i < n; i++) {
    left[i + 1] = left[i] * nums[i];
  }

  let right = new Array(nums.length);
  right[right.length - 1] = 1;

  for (let j = right.length - 1; j > 0; j--) {
    right[j - 1] = right[j] * nums[j];
  }

  for (let i = 0, n = nums.length; i < n; i++) {
    nums[i] = left[i] * right[i];
  }

  return nums;
};
