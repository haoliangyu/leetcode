// Given an index k, return the kth row of the Pascal's triangle.
//
// For example, given k = 3,
// Return [1,3,3,1].

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) { return []; }

  let cur = [1];
  for (let i = 1; i < rowIndex; i++) {
    let next = [1];

    for (let j = 0, n = cur.length; j < n; j++) {
      next.push(cur[j] + cur[j + 1]);
    }

    next.push(1);
    cur = next;
  }

  return cur;
};
