// Related to question Excel Sheet Column Title
//
// Given a column title as appear in an Excel sheet, return its corresponding column number.
//
// For example:
//
//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var num = 0;
  var temp = 1;

  for (var i = s.length - 1; 0 <= i ; i--) {
    num += (s.charCodeAt(i) - 64) * temp;
    temp *= 26;
  }

  return num;
};
