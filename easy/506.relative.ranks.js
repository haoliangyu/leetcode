// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
//
// Example 1:
//
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
// For the left two athletes, you just need to output their relative ranks according to their scores.
//
// Note:
//
//    N is a positive integer and won't exceed 10,000.
//    All the scores of athletes are guaranteed to be unique.

/**
 * @param {number[]} nums
 * @return {string[]}
 */
let findRelativeRanks = function(nums) {

  // create a copy of nums
  let clone = [];
  nums.forEach(i => clone.push(i));

  clone.sort((a, b) => b - a);

  let indexes = {};
  nums.forEach((val, i) => { indexes[val] = i; });

  nums[indexes[clone[0]]] = 'Gold Medal';
  nums[indexes[clone[1]]] = 'Silver Medal';
  nums[indexes[clone[2]]] = 'Bronze Medal';

  for (let i = 3, n = nums.length; i < n; i++) {
    nums[indexes[clone[i]]] = (i + 1).toString();
  }

  return nums;
};
