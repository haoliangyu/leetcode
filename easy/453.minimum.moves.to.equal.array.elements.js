// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.
//
// Example:
//
// Input:
// [1,2,3]
//
// Output:
// 3
//
// Explanation:
// Only three moves are needed (remember each move increments two elements):
//
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

/**
 * @param {number[]} nums
 * @return {number}
 */
let minMoves = function(nums) {

  let moves = 0;
  let cumulated = 0;

  nums.sort((a, b) => a - b);

  for (let i = 1, m = nums.length; i < m; i++) {
    cumulated += nums[i] - nums[i - 1];
    moves += cumulated;
  }

  return moves;
};
