// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.
//
// For example:
//
// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
//
// Note:
//
//    The order of the result is not important. So in the above example, [5, 3] is also correct.
//    Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let singleNumber = function(nums) {

  let single = {};

  nums.forEach(val => {
    if (single[val] === true) {
      single[val] = false;
    } else {
      single[val] = true;
    }
  });

  let results = [];

  for (let val in single) {
    if (single[val]) {
      results.push(Number(val));
    }
  }

  return results;
};
