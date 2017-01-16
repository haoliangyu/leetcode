// Given a binary array, find the maximum number of consecutive 1s in this array.
//
// Example 1:
//
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
//
// Note:
//
//     The input array will only contain 0 and 1.
//     The length of input array is a positive integer and will not exceed 10,000

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let current = 0;
  let started = nums[0] === 1;

  for (let i = 0, n = nums.length; i < n; i++) {
    if (nums[i] === 1) {
      if (!started) {
        started = true;
      }

      current++;
    } else if (started && nums[i] === 0) {
      if (current > count) {
        count = current;
      }

      started = false;
      current = 0;
    }
  }

  return started && current > count ? current : count;
};
