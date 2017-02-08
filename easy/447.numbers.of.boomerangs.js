// Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).
//
// Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).
//
// Example:
//
// Input:
// [[0,0],[1,0],[2,0]]
//
// Output:
// 2
//
// Explanation:
// The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]

/**
 * @param {number[][]} points
 * @return {number}
 */
let numberOfBoomerangs = function(points) {

  let count = points.length;

  if (count < 3) {
    return 0;
  }

  let boomerangs = 0;

  for (let i = 0; i < count; i++) {
    let distCount = {};

    for (let j = 0; j < count; j++) {
      let dx = points[i][0] - points[j][0];
      let dy = points[i][1] - points[j][1];
      let dist = dx * dx + dy * dy;

      distCount[dist] = distCount[dist] === undefined ? 1 : distCount[dist] + 1;
    }

    for (let dist in distCount) {
      let count = distCount[dist];
      boomerangs += count * (count - 1);
    }
  }

  return boomerangs;
};
