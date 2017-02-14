// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
//
// Find out how many ways to assign symbols to make sum of integers equal to target S.
//
// Example 1:
//
// Input: nums is [1, 1, 1, 1, 1], S is 3.
// Output: 5
// Explanation:
//
// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
//
// There are 5 ways to assign symbols to make the sum of nums be target 3.
//
// Note:
//
//    The length of the given array is positive and will not exceed 20.
//    The sum of elements in the given array will not exceed 1000.
//    Your output answer is guaranteed to be fitted in a 32-bit integer.

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  if (nums.length < 1) {
    return 0;
  }

  let range = {};
  range[nums.length - 1] = nums[nums.length - 1];

  for (let i = nums.length - 2; 0 <= i; i--) {
    range[i] = range[i + 1] + nums[i];
  }

  let ways = 0;
  let last = nums.length - 1;
  let stack = [
    { index: 0, current: nums[0] },
    { index: 0, current: -nums[0] }
  ];

  while (stack.length > 0) {
    let step = stack.pop();

    if (step.index < last) {
      let next = step.index + 1;
      let nextValue = nums[next];

      if (step.current - range[next] <= S) {
        stack.push({ index: next, current: step.current - nextValue });
      }

      if (S <= step.current + range[next]) {
        stack.push({ index: next, current: step.current + nextValue });
      }
    } else if (step.current === S) {
      ways++;
    }
  }

  return ways;
};
