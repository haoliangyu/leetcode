// Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.
//
// For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).
//
// Note: You may assume that n is not less than 2 and not larger than 58.

/**
 * @param {number} n
 * @return {number}
 */
let integerBreak = function(n) {

  let largest = 1;

  for (let i = 2, stop = n - 1; i <= stop; i++) {
    let mode = n % i;
    let part = (n / i) >> 0;
    let current;

    current = Math.pow(part + 1, mode) * Math.pow(part, i - mode);

    if (current <= largest) {
      return largest;
    }

    largest = current;
  }

  return largest;
};
