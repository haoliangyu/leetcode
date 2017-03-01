// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
//
// For example,
// Given n = 3,
// You should return the following matrix:
//
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = function(n) {

  let totalNumber = n * n;
  let current = 0;
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n));
  }

  let direction = 'N';
  let i = 0;
  let j = 0;

  while (current < totalNumber) {
    if (direction === 'N') {
      for (; j < n && matrix[i][j] === undefined; j++) {
        current++;
        matrix[i][j] = current;
      }
      j--;
      i++;
      direction = 'E';
    } else if (direction === 'E') {
      for (; i < n && matrix[i][j] === undefined; i++) {
        current++;
        matrix[i][j] = current;
      }
      i--;
      j--;
      direction = 'S';
    } else if (direction === 'S') {
      for (; 0 <= j && matrix[i][j] === undefined; j--) {
        current++;
        matrix[i][j] = current;
      }
      j++;
      i--;
      direction = 'W';
    } else {
      for (; 0 <= i && matrix[i][j] === undefined; i--) {
        current++;
        matrix[i][j] = current;
      }
      j++;
      i++;
      direction = 'N';
    }
  }

  return matrix;
};
