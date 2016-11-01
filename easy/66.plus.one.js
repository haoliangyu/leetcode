// Given a non-negative number represented as an array of digits, plus one to the number.
//
// The digits are stored such that the most significant digit is at the head of the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var delta = 1;

  for (var i = digits.length - 1; i >= 0 && delta === 1; i--) {
    var digit = digits[i] + 1;

    if (digit < 10) {
      digits[i] = digit;
      delta = 0;
    } else {
      digits[i] = digit - 10;
    }
  }

  if (delta === 1) {
    digits.splice(0, 0, 1);
  }

  return digits;
};
