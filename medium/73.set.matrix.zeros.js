// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function(matrix) {

  let skipRow = {};
  let skipColumn = {};

  for (let i = 0, n = matrix.length; i < n; i++) {
    if (skipRow[i] === true) {
      continue;
    }

    for (let j = 0, m = matrix[i].length; j < m; j++) {
      if (skipColumn[j] === true) {
        continue;
      }

      if (matrix[i][j] === 0) {
        setRowZeros(matrix, i, skipRow, skipColumn);
        setColumnZeros(matrix, j, skipRow, skipColumn);
        break;
      }
    }
  }
};

function setRowZeros(matrix, x, skipRow, skipColumn) {

  if (skipRow[x] === true) {
    return;
  }

  skipRow[x] = true;

  let row = matrix[x];

  for (let i = 0, n = row.length; i < n; i++) {
    if (row[i] === 0) {
      setColumnZeros(matrix, i, skipRow, skipColumn);
    } else {
      row[i] = 0;
    }
  }
}

function setColumnZeros(matrix, y, skipRow, skipColumn) {

  if (skipColumn[y] === true) {
    return;
  }

  skipColumn[y] = true;

  for (let i = 0, n = matrix.length; i < n; i++) {
    if (matrix[i][y] === 0) {
      setRowZeros(matrix, i, skipRow, skipColumn);
    } else {
      matrix[i][y] = 0;
    }
  }
}
