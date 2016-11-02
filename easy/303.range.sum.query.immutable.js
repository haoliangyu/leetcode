// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
//
// Example:
//
// Given nums = [-2, 0, 3, -5, 2, -1]
//
// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
//
// Note:
//
//     You may assume that the array does not change.
//     There are many calls to sumRange function.

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.sum = [nums[0]];

  for (let i = 1, n = nums.length; i < n; i++) {
    this.sum.push(this.sum[i - 1] + nums[i]);
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sum[j] - this.sum[i] + this.nums[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
