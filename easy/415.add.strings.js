// Given two non-negative numbers num1 and num2 represented as string, return the sum of num1 and num2.
//
// Note:
//
//     The length of both num1 and num2 is < 5100.
//     Both num1 and num2 contains only digits 0-9.
//     Both num1 and num2 does not contain any leading zero.
//     You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var digits = [];
  var delta = 0;
  var a, b, sum;

  for (var i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || delta !== 0; i--, j--) {
    a = i >= 0 ? +num1[i] : 0;
    b = j >= 0 ? +num2[j] : 0;

    sum = a + b + delta;
    if (sum >= 10) {
      digits.push((sum - 10).toString());
      delta = 1;
    } else {
      digits.push(sum.toString());
      delta = 0;
    }
  }

  return digits.reverse().join('');
};
