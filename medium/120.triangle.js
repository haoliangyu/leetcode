// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
//
// For example, given the following triangle
//
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
//
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
//
// Note:
// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = function(triangle) {

  if (triangle.length === 0) {
    return 0;
  }

  if (triangle.length === 1) {
    return triangle[0][0];
  }

  let sums = new Array(triangle.length);
  sums[0] = triangle[0][0];

  for (let i = 1, n = triangle.length; i < n; i++) {
    let previous = Infinity;
    let j = 0;

    for (; j < i; j++) {
      let current = sums[j];
      sums[j] = min(previous + triangle[i][j], current + triangle[i][j]);
      previous = current;
    }

    sums[j] = previous + triangle[i][j];
  }

  let minSum = Infinity;

  for (let sum of sums) {
    if (sum < minSum) {
      minSum = sum;
    }
  }

  return minSum;
};

function min(a, b) {
  return a > b ? b : a;
}
