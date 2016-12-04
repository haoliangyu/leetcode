// Given an integer n, return the number of trailing zeroes in n!.
//
// Note: Your solution should be in logarithmic time complexity.

/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
   return n === 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
 };
