// Find all possible combinations of k numbers that add up to a number n, given
// that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
//
// Example 1:
//
// Input: k = 3, n = 7
//
// Output:
//
// [[1,2,4]]
//
//
// Example 2:
//
// Input: k = 3, n = 9
//
// Output:
//
// [[1,2,6], [1,3,5], [2,3,4]]

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let combinationSum3 = function(k, n) {
  let results = [];

  combine([], 0, 0, results, k, n);

  return results;
};

function combine(current, i, sum, results, k, n) {
  if (current.length === k && sum === n) {
    results.push(current);
  } else {
    for (let j = i + 1; j < 10; j++) {
      let next = current.slice();
      next.push(j);
      combine(next, j, sum + j, results, k, n);
    }
  }
}
