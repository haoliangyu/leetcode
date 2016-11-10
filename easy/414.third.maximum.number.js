// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
//
// Example 1:
//
// Input: [3, 2, 1]
//
// Output: 1
//
// Explanation: The third maximum is 1.
//
// Example 2:
//
// Input: [1, 2]
//
// Output: 2
//
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
//
// Example 3:
//
// Input: [2, 2, 3, 1]
//
// Output: 1
//
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  var result = [-Infinity, -Infinity, -Infinity];
  var val;

  for(var i = nums.length - 1; i >= 0; i--) {
    val = nums[i];

    if (val > result[0]) {
      result.splice(0, 0, val);
    } else if (val !== result[0] && val > result[1]) {
      result.splice(1, 0, val);
    } else if (val !== result[1] && val !== result[0] && val > result[2]) {
      result.splice(2, 0, val);
    }
  }

  if (result[2] !== -Infinity) {
    return result[2];
  } else {
    return result[0];
  }
};
