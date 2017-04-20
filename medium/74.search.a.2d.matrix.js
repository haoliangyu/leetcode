// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
//     Integers in each row are sorted from left to right.
//     The first integer of each row is greater than the last integer of the previous row.
//
// For example,
//
// Consider the following matrix:
//
// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
//
// Given target = 3, return true.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {

  let m = matrix.length;

  if (m === 0) {
    return false;
  }

  let n = matrix[0].length;

  if (n === 0) {
    return false;
  }

  let start = 0;
  let end = m * n - 1;

  while (start + 1 < end) {
    let middle = (start + end) >> 1;
    let middleValue = value(matrix, n, middle);

    if (middleValue === target) {
      return true;
    } else if (middleValue < target) {
      start = middle;
    } else {
      end = middle;
    }
  }

  let startValue = value(matrix, n, start);
  let endValue = value(matrix, n, end);

  return startValue === target || endValue === target;
};

function value(matrix, n, index) {
  let row = (index / n) >> 0;
  return matrix[row][index - row * n];
}
