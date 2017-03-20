// Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
//
// For example,
// Given n = 3, there are a total of 5 unique BST's.
//
//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

/**
 * @param {number} n
 * @return {number}
 */
let numTrees = function(n) {
  let counts = [1, 1];

  for (let i = 1; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= n; j++) {
      count += counts[j - 1] * counts[n - j];
    }

    counts[i] = count;
  }

  return counts[n];
};
