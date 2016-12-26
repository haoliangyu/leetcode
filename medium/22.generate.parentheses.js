// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
// [
//  "((()))",
//  "(()())",
//  "(())()",
//  "()(())",
//  "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  let allResults = [];

  function generator(current, left, right) {
    if (right === 0) {
      allResults.push(current);
      return;
    }

    if (left > 0) {
      generator(current + '(', left - 1, right);
    }

    if (right > left) {
      generator(current + ')', left, right - 1);
    }
  }

  generator('(', n - 1, n);

  return allResults;
};
