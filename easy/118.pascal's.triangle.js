// Given numRows, generate the first numRows of Pascal's triangle.
//
// For example, given numRows = 5,
// Return
//
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) { return [1]; }

  let cur = [1, 1];
  for (let i = 1; i < rowIndex; i++) {
    for (let j = 0, n = cur.length - 1; j < n; j++) {
      cur[j] += cur[j + 1];
    }

    cur.unshift(1);
  }

  return cur;
};
