// Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {

  let counts = {};

  for (let value of nums) {
    let count = counts[value];

    if (count === undefined) {
      counts[value] = 1;
    } else {
      counts[value] = count + 1;
    }
  }

  for (let value of nums) {
    let count = counts[value];

    if (count === 1) {
      return value;
    }
  }

};
