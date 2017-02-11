// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.
//
// Example:
//
// Input:
// [
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ]
// ]
// Output:  [1,2,4,7,5,3,6,8,9]
// Explanation:
//
// Note:
//
//    The total number of elements of the given matrix will not exceed 10,000.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let findDiagonalOrder = function(matrix) {
  let results = [];

  if (matrix.length === 0) {
    return results;
  }

  let lastRow = matrix.length - 1;
  let lastColumn = matrix[0].length - 1;

  let row = 0;
  let column = 0;

  let reversed = false;

  while (row !== lastRow || column !== lastColumn) {
    results.push(matrix[row][column]);

    if (column === lastColumn && !reversed) {
      row++;
      reversed = true;
    } else if (row === 0 && !reversed) {
      column++;
      reversed = true;
    }  else if (row === lastRow && reversed) {
      column++;
      reversed = false;
    } else if (column === 0 && reversed) {
      row++;
      reversed = false;
    } else if (reversed) {
      row++;
      column--;
    } else {
      column++;
      row--;
    }
  }

  results.push(matrix[lastRow][lastColumn]);

  return results;
};
