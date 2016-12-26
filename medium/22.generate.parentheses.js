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
  let left = n - 1;
  let right = n;
  let current = ['('];
  let final = Array(n).fill('(').concat(Array(n).fill(')')).join('');

  while (true) {
    if (right === 0) {
      let result = current.join('');

      allResults.push(result);

      if (result === final) {
        return allResults;
      }

      do {
        if (current.pop() === ')') {
          right++;

          if (left > 0) {
            break;
          }
        } else {
          left++;
        }
      } while(true);

      current.push('(');
      left--;
    } else if (right > left) {
      current.push(')');
      right--;
    } else if (left > 0) {
      current.push('(');
      left--;
    }
  }
};
