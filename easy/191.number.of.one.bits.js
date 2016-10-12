// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
//
// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var count = 0;
  var lo = n & 0x3fffffff;
  var hi = (n - lo) / 0x40000000;

  while (lo > 0) {
    lo = lo & (lo - 1);
    count += 1;
  }

  while (hi > 0) {
    hi = hi & (hi - 1);
    count += 1;
  }

  return count;
};
