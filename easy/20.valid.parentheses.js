// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
   var stack = [];

   for (var i = 0, n = s.length; i < n; i++) {
     if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
       stack.push(s[i]);
     } else if (s[i] === ')' && stack[stack.length - 1] !== '(') {
       return false;
     } else if (s[i] === '}' && stack[stack.length - 1] !== '{') {
       return false;
     } else if (s[i] === ']' && stack[stack.length - 1] !== '[') {
       return false;
     } else {
       stack.pop();
     }
   }

   return stack.length === 0;
 };
