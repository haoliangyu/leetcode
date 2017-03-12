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
  let n = candidates.length - 1;
  let stack = [0];

  candidates.sort((a, b) => a - b);

  let currentSum = candidates[0];

  while(stack[0] <= n) {

    if (currentSum >= target) {
      if (currentSum === target) {
        results.push(getCombination(candidates, stack));
      }

      let lastIndex;

      do {
        lastIndex = stack.pop();
        currentSum -= candidates[lastIndex];
      } while (stack.length > 1 && stack[stack.length - 1] === n);

      lastIndex = stack[stack.length - 1];

      currentSum -= candidates[lastIndex] - candidates[lastIndex + 1];
      stack[stack.length - 1] = lastIndex + 1;
    } else {
      let lastIndex = stack[stack.length - 1];
      currentSum += candidates[lastIndex];
      stack.push(lastIndex);
    }
  }

  return results;
};

function getCombination(candidates, indexes) {
  let result = [];

  for(let i = 0, n = indexes.length; i < n; i++) {
    result.push(candidates[indexes[i]]);
  }

  return result;
}
