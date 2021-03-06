// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
//
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a number of rows:
//
// string convert(string text, int nRows);
//
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
   if (numRows < 2) {
     return s;
   }

   var strLen = s.length;

   if (strLen <= numRows) {
     return s;
   }

   var result = '';
   var interval = 2 * numRows - 2;
   var j, subInterval;

   for (j = 0; j < strLen; j += interval) {
     result += s[j];
   }

   for (var i = 1; i < numRows - 1; i++) {
     subInterval = 2 * (numRows - i - 1);

     for (j = i; j < strLen; j += interval) {
       result += s[j];

       if (j + subInterval < strLen) {
         result += s[j + subInterval];
       }
     }
   }

   for (j = numRows - 1; j < strLen; j += interval) {
     result += s[j];
   }

   return result;
 };
