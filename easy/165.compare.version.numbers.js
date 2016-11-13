// Compare two version numbers version1 and version2.
// If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
//
// You may assume that the version strings are non-empty and contain only digits and the . character.
// The . character does not represent a decimal point and is used to separate number sequences.
// For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
//
// Here is an example of version numbers ordering:
//
// 0.1 < 1.1 < 1.2 < 13.37

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let numbers1 = version1.split('.').map(str => {
    return +str;
  });

  let numbers2 = version2.split('.').map(str => {
    return +str;
  });

  while (numbers1.length < numbers2.length) {
    numbers1.push(0);
  }

  while (numbers2.length < numbers1.length) {
    numbers2.push(0);
  }

  for (let i = 0, n = numbers1.length, m = numbers2.length; i < n && i < m; i++) {
    if (numbers1[i] > numbers2[i]) {
      return 1;
    } else if (numbers1[i] < numbers2[i]) {
      return -1;
    }
  }

  return 0;
};
