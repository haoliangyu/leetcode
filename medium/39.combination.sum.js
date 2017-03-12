// Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
//
// The same repeated number may be chosen from C unlimited number of times.
//
// Note:
//
//    All numbers (including target) will be positive integers.
//    The solution set must not contain duplicate combinations.
//
// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is:
//
// [
//  [7],
//  [2, 2, 3]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function(candidates, target) {
  let results = [];
  candidates.sort((a, b) => a - b);
  getCombinations(candidates, target, 0, 0, [], results);

  return results;
};

function getCombinations(candidates, target, currentIndex, currentSum, current, results) {
  for (let i = currentIndex, n = candidates.length; i < n; i++) {
    let nextSum = currentSum + candidates[i];

    if (nextSum === target) {
      current.push(candidates[i]);
      results.push(current);
    } else if (nextSum < target) {
      let next = current.slice();
      next.push(candidates[i]);
      getCombinations(candidates, target, i, nextSum, next, results);
    }
  }
}
