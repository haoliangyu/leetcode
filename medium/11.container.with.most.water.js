// Given n non-negative integers a1, a2, ..., an, where each represents a point
// at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
// of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis
// forms a container, such that the container contains the most water.
//
// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
  let max = -Infinity;
  let i = 0;
  let j = height.length - 1;

  // if it's harder to grow from the minimal solution, then try to reduce from
  // the maximum one.
  while (i < j) {
    let area = (j - i) * (height[i] < height[j] ? height[i] : height[j]);

    if (area > max) {
      max = area;
    }

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }


  return max;
};
