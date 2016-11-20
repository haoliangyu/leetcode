// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.
//
// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.
//
// For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) { return true; }

  s = s.toLowerCase();
  sl = s.length;

  for (let i = 0, j = sl - 1; i <= j;) {
    for (; i < sl && notChar(s, i); i++);
    for (; j > 0  && notChar(s, j); j--);

    if (i <= j && s[i] !== s[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }

  return true;
};

function notChar(s, index) {
  let charCode = s.charCodeAt(index);
  return (charCode < 97 || charCode > 122) && (charCode < 48 || charCode > 57);
}
