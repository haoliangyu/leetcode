// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let middle = (start + end) >> 1;

    if (nums[middle] === target) {
      return middle;
    } if (target < nums[middle]) {
      // in order
      if (nums[start] < nums[middle] && target < nums[start]) {
        start = middle;
      } else {
        end = middle;
      }
    } else if (nums[middle] < nums[end] && target > nums[end]) {
      end = middle;
    } else {
      start = middle;
    }
  }

  return nums[start] === target ? start :
         nums[end] === target ? end : -1;
};
