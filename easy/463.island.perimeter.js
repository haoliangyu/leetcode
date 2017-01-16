// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
//
// Example:
//
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]
//
// Answer: 16
// Explanation: The perimeter is the 16 yellow stripes in the image below:
//

function cell(x, y, grid) {
  if (grid[x] === undefined || grid[x][y] === undefined) {
    return 0;
  }

  return grid[x][y];
}

function water(x, y, grid) {
  return cell(x + 1, y, grid) +
         cell(x - 1, y, grid) +
         cell(x, y + 1, grid) +
         cell(x, y - 1, grid);
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let strips = 0;

  for (let i = 0, n = grid.length; i < n; i++) {
    for (let j = 0, m = grid[i].length; j < m; j++) {
      if (grid[i][j] === 1) {
        strips += water(i, j, grid);
      }
    }
  }

  return strips;
};
