// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
//
// For example,
// Given the following matrix:
//
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
//
// You should return [1,2,3,6,9,8,7,4,5].

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function(matrix) {
  let result = [];

  if (matrix.length === 0) {
    return result;
  }

  let n = matrix.length;
  let m = matrix[0].length;
  let totalNumber = n * m;
  let direction = 'N';
  let i = 0;
  let j = 0;

  while (result.length < totalNumber) {
    if (direction === 'N') {
      for (; j < m && matrix[i][j] !== null; j++) {
        result.push(matrix[i][j]);
        matrix[i][j] = null;
      }
      j--;
      i++;
      direction = 'E';
    } else if (direction === 'E') {
      for (; i < n && matrix[i][j] !== null; i++) {
        result.push(matrix[i][j]);
        matrix[i][j] = null;
      }
      i--;
      j--;
      direction = 'S';
    } else if (direction === 'S') {
      for (; 0 <= j && matrix[i][j] !== null; j--) {
        result.push(matrix[i][j]);
        matrix[i][j] = null;
      }
      j++;
      i--;
      direction = 'W';
    } else {
      for (; 0 <= i && matrix[i][j] !== null; i--) {
        result.push(matrix[i][j]);
        matrix[i][j] = null;
      }
      j++;
      i++;
      direction = 'N';
    }
  }

  return result;
};
