// A peak element is an element that is greater than its neighbors.
//
// Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
//
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
//
// You may imagine that num[-1] = num[n] = -∞.
//
// For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

/**
 * @param {number[]} nums
 * @return {number}
 */
let findPeakElement = function(nums) {
  // what if length === 0

  if (nums.length === 1) {
    return 0;
  }

  if (nums.length === 2) {
    return nums[0] > nums[1] ? 0 : 1;
  }

  if (nums[0] > nums[1]) {
    return 0;
  }

  let previous = true;
  let next;

  for (let i = 1, n = nums.length - 1; i < n; i++) {
    next = nums[i] > nums[i + 1];

    if (previous && next) {
      return i;
    }

    previous = !next;
  }

  if (nums[nums.length - 2] < nums[nums.length - 1]) {
    return nums.length - 1;
  }
};
