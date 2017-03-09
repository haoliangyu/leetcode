// You are given an n x n 2D matrix representing an image.
//
// Rotate the image by 90 degrees (clockwise).
//
// Follow up:
// Could you do this in-place?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {

  let size = matrix.length - 1;
  let halfSize = Math.floor(size / 2) + 1;

  for (let i = 0; i < halfSize; i++) {
    for (let j = i, m = size - i; j < m; j++) {
      let tempA, tempB;

      tempA = matrix[j][size - i];
      matrix[j][size - i] = matrix[i][j];

      tempB = matrix[size - i][size - j];
      matrix[size - i][size - j] = tempA;

      tempA = matrix[size - j][i];
      matrix[size - j][i] = tempB;

      matrix[i][j] = tempA;
    }
  }
};
