// Given an integer, convert it to a roman numeral.
//
// Input is guaranteed to be within the range from 1 to 3999.

/**
 * In this case, I want to test and compare the performance:
 * 1. multiple string concatenation using (+=)
 * 2. append a single character multiple time and join to be a string
 * 3. concate multiple arrays into one array and join to be a string
 */

let numberals = [1, 5, 10, 50, 100, 500, 1000];
let romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = num => {
  let result = '';

  for (let i = 6; i >= 0; i -= 2) {
    let count = (num / numberals[i]) >> 0;

    if (count > 8) {
      result += (romans[i] + romans[i + 2]);
    } else if (count >= 5) {
      result += (romans[i + 1] + new Array(count - 5).fill(romans[i]).join(''));
    } else if (count > 3) {
      result += (romans[i] + romans[i + 1]);
    } else {
      result += new Array(count).fill(romans[i]).join('');
    }

    num -= count * numberals[i];
  }

  return result;
};
