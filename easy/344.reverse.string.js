// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {

  var result = s.split('');
  var length = result.length;
  var temp;

  for (var i = 0, n = length >> 1; i < n; i++) {
    temp = result[i];
    result[i] = result[length - i - 1];
    result[length - i - 1] = temp;
  }

  return result.join('');
};
