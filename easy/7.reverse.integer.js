// Reverse digits of an integer.
//
// Example1: x = 123, return 321
// Example2: x = -123, return -321

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isNegative = x < 0;

  if (isNegative) {
    x = -x;
  }

  var nums = [];
  while (x >= 1) {
    nums.push(x % 10);
    x = Math.trunc(x / 10);
  }

  var result = 0;

  while (nums.length > 0) {
   if (result > 214748364) {
      return 0;
    }

    result = result * 10 + nums.shift();
  }

  return isNegative ? -result : result;
};
