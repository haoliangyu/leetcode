// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
//
// How many possible unique paths are there?
//
//
// Above is a 3 x 7 grid. How many possible unique paths are there?
//
// Note: m and n will be at most 100.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = function(m, n) {
  if (m === 0 && n === 0) {
    return 0;
  }

  if (m === 1 && n === 1) {
    return 1;
  }


  // construct the first level
  let level = new Array(n).fill(1);
  let paths = [level];

  for (let i = 1; i < m; i++) {
    level = [1];

    for (let j = 1; j < n; j++) {
      level.push(paths[i - 1][j] + level[j - 1]);
    }

    paths.push(level);
  }

  return paths[m - 1][n - 1];
};
