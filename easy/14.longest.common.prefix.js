// Write a function to find the longest common prefix string amongst an array of strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 1) {
    return '';
  }

  var common = strs[0];

  for (let i = 1, n = strs.length; i < n; i++) {
    if (common.length > strs[i].length) {
      common = strs[i];
    }
  }

  for (let i = 0, n = strs.length; i < n; i++) {
    for (let index = 0, m = common.length, o = strs[i].length; index < m && index < o; index++) {
      if (common[index] !== strs[i][index]) {
        common = common.slice(0, index);
        break;
      }
    }
  }

  return common;
};
