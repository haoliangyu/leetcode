// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
//
// For example,
// Given nums = [0, 1, 3] return 2.
//
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = nums => {
  let dict = new Array(nums.length + 1).fill(true);

  for (let i = 0, n = nums.length; i < n; i++) {
    dict[nums[i]] = false;
  }

  for (let i = 0, n = nums.length + 1; i < n; i++) {
    if (dict[i]) {
      return i;
    }
  }
};
