// Given two binary strings, return their sum (also a binary string).
//
// For example,
// a = "11"
// b = "1"
// Return "100".

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var result = '';
  var delta = 0;
  var digitA, digitB, sum;

  for (var i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || delta !== 0; i--, j--) {
    digitA = a[i] ? a.charCodeAt(i) - 48 : 0;
    digitB = b[j] ? b.charCodeAt(j) - 48 : 0;

    sum = digitA + digitB + delta;
    if (sum < 2) {
      delta = 0;
      result = sum.toString() + result;
    } else {
      delta = 1;
      result = (sum - 2).toString() + result;
    }
  }

  return result;
};
