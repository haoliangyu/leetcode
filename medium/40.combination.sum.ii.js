// Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
//
// Each number in C may only be used once in the combination.
//
// Note:
//
//    All numbers (including target) will be positive integers.
//    The solution set must not contain duplicate combinations.
//
// For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
// A solution set is:
//
// [
//  [1, 7],
//  [1, 2, 5],
//  [2, 6],
//  [1, 1, 6]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function(candidates, target) {
  let results = [];

  candidates.sort((a, b) => a - b);

  getCombinations(candidates, target, 0, 0, [], results);

  return results;
};

function getCombinations(candidates, target, currentIndex, currentSum, current, results) {
  if (currentSum === target) {
    results.push(current);
  } else if (currentSum < target) {
    for (let i = currentIndex, n = candidates.length; i < n; i++) {
      if (i > currentIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }

      let next = current.slice();
      next.push(candidates[i]);
      getCombinations(candidates, target, i + 1, currentSum + candidates[i], next, results);
    }
  }
}
