// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
//
// For example:
//
//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB

const lookup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let result = '';

  while (n !== 0) {
    let value = n % 26;

    if (value === 0) {
      value = 25;
      n -= 26;
    } else {
      value--;
    }

    result = lookup[value] + result;

    n = Math.floor(n / 26);
  }

  return result;
};
