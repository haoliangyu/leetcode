// Given an integer, write a function to determine if it is a power of two.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }

  while (n > 0) {
    if (n === 1) {
      return true;
    }

    if ((n & 1) === 1) {
      return false;
    }

    n = n >> 1;
  }

  return true;
};
