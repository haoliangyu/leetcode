// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//
// For example,
// If n = 4 and k = 2, a solution is:
//
// [
//  [2,4],
//  [3,4],
//  [2,3],
//  [1,2],
//  [1,3],
//  [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let results = [];
  let stack = [1];

  while (stack.length > 0) {
    if (stack[stack.length - 1] > n) {
      do {
        let last = stack.pop() + 1;

        if (last <= n) {
          stack.push(last);
          break;
        }
      } while (stack.length > 0);
    } else if (stack.length < k) {
      stack.push(stack[stack.length - 1] + 1);
    } else {
      results.push(stack.slice());
      stack.push(stack.pop() + 1);
    }
  }

  return results;
};
