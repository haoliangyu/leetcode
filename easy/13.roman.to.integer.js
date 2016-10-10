// Given a roman numeral, convert it to an integer.
//
// Input is guaranteed to be within the range from 1 to 3999.

var dict = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var value = 0;
  var number;

  for (var i = 0, n = s.length; i < n; i++) {
    number = dict[s[i]];

    if ((i + 1) < n && number < dict[s[i + 1]]) {
      number = dict[s[i + 1]] - number;
      i += 1;
    }

    value += number;
  }

  return value;
};
