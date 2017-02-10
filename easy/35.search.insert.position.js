// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
//
// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {

  if (target <= nums[0]) {
    return 0;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left + 1 < right) {
    let middle = ((left + right) / 2) >> 0;

    if (target < nums[middle]) {
      right = middle;
    } else {
      left = middle;
    }
  }

  return nums[left] === target ? left : left + 1;
};
