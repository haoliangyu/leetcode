// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...
//
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
//
// Given an integer n, generate the nth sequence.
//
// Note: The sequence of integers will be represented as a string.

/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
   if (n < 2) {
     return '1';
   }

   var prevValue = '1';
   var value, count, prevChar;

   for (var i = 1; i < n; i++) {
     value = '';
     count = 0;
     prevChar = prevValue[0];

     for (var k = 0, m = prevValue.length; k < m; k++) {
       if (prevChar !== prevValue[k]) {
         value += count + prevChar;
         prevChar = prevValue[k];
         count = 1;
       } else {
         count += 1;
       }
     }

     value += count + prevChar;

     prevValue = value;
   }

   return value;
 };
