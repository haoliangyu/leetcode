// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.
//
// click to show more practice.
// More practice:
//
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {

  let largest = nums[0];
  let inclusievLargest = [nums[0]];

  for (let i = 1, n = nums.length; i < n; i++) {
    let current = nums[i];
    let includeCurrent = inclusievLargest[i - 1] + current;
    let includeMax = current > includeCurrent ? current : includeCurrent;

    inclusievLargest.push(includeMax);
    largest = largest > includeMax ? largest : includeMax;
  }

  return largest;
};
