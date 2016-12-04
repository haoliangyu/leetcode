// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Examples:
//
//     pattern = "abba", str = "dog cat cat dog" should return true.
//     pattern = "abba", str = "dog cat cat fish" should return false.
//     pattern = "aaaa", str = "dog cat cat dog" should return false.
//     pattern = "abba", str = "dog dog dog dog" should return false.
//
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
 /**
  * @param {string} pattern
  * @param {string} str
  * @return {boolean}
  */
 var wordPattern = function(pattern, str) {
   let dictWord = {};
   let dictPattern = {};
   let words = str.split(' ');

   if (words.length != pattern.length) {
     return false;
   }

   for (let i = 0, n = pattern.length; i < n; i++) {
     let work = words[i];
     let currentPattern = pattern[i];

     let matchWord = dictPattern[currentPattern];
     let matchPattern = dictWord[work];

     if (!matchWord && !matchPattern) {
       dictPattern[currentPattern] = work;
       dictWord[work] = currentPattern;
     } else if (matchWord === work && matchPattern === currentPattern) {
       continue;
     } else {
       return false;
     }
   }

   return true;
 };
