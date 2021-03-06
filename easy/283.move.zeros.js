// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
//
//    You must do this in-place without making a copy of the array.
//    Minimize the total number of operations.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var front = 0;
    var back = 0;
    var end = nums.length - 1;

    while (true) {
      while (nums[front] === 0 && front <= end) {
        front += 1;
      }

      if (front > end) {
        break;
      } else  {
        nums[back] = nums[front];
        back += 1;
        front += 1;
      }
    }

    while (back <= end) {
      nums[back] = 0;
      back += 1;
    }
};
