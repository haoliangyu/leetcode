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
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows < 1) { return []; }

  return triangle(2, [1], numRows, [[1]]);
};

function triangle(level, prev, targetLevel, results) {
  if (level > targetLevel) { return results; }

  let cur = [1];
  for (let i = 0, n = prev.length - 1; i < n; i++) {
    cur.push(prev[i] + prev[i + 1]);
  }

  cur.push(1);
  results.push(cur);

  return triangle(level + 1, cur, targetLevel, results);
}
