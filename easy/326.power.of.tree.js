// Given an integer, write a function to determine if it is a power of three.
//
// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

  if (n <= 0) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  while (n > 0) {
    if (n === 1) {
      return true;
    }

    if ((n % 3) !== 0) {
      return false;
    }

    n = n / 3;
  }

  return true;
};
