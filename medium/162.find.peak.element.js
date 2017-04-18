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

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let middle = (start + end) >> 1;
    let largerThanPrev = nums[middle - 1] < nums[middle];
    let largerThanNext = nums[middle + 1] < nums[middle];

    if (largerThanNext && largerThanPrev) {
      return middle;
    } else if (largerThanNext) {
      end = middle;
    } else {
      start = middle;
    }
  }

  return nums[start] > nums[end] ? start : end;
};
