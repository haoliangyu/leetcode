// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//
// Find the minimum element.
//
// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
let findMin = function(nums) {

  let smallest = nums[0];

  for (let i = 1, n = nums.length; i < n; i ++) {
    if (nums[i - 1] > nums[i] && nums[i] < smallest) {
      smallest = nums[i];
    }
  }

  return smallest;
};
