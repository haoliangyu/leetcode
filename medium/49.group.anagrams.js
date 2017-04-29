// Given an array of strings, group anagrams together.
//
// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:
//
// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
//
// Note: All inputs will be in lower-case.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {

  let dict = {};

  for (let str of strs) {
    let key = str.split('').sort().join('');

    if (dict[key]) {
      dict[key].push(str);
    } else {
      dict[key] = [str];
    }
  }

  return Object.values(dict);
};
