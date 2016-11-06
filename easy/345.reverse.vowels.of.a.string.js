// Write a function that takes a string as input and reverse only the vowels of a string.
//
// Example 1:
// Given s = "hello", return "holle".
//
// Example 2:
// Given s = "leetcode", return "leotcede".
//
// Note:
// The vowels does not include the letter "y".

var swap = function(s, i, j) {
  var temp = s[i];
  s[i] = s[j];
  s[j] = temp;
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (!s) {
    return s;
  }

  s = s.split('');

  var vowels = 'aeiouAEIOU';
  var i = 0;
  var j = s.length - 1;

  while (i < j) {
    while (i < j && vowels.indexOf(s[i]) === -1) {
      i++;
    }

    while (i < j && vowels.indexOf(s[j]) === -1) {
      j--;
    }

    if (i !== j) {
      swap(s, i, j);
      i++;
      j--;
    }
  }

  return s.join('');
};
