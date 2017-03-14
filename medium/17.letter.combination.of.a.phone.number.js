// Given a digit string, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below.
//
// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

const letters = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};

/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
  if (digits.length < 1) {
    return [];
  }

  let table = [letters[digits[0]].split('')];

  for (let i = 1, n = digits.length; i < n; i++) {
    let toAdd = letters[digits[i]];
    let lastCom = table[i - 1];
    let newCom = [];

    for(let j = 0, m = toAdd.length; j < m; j++) {
      for (let k = 0, o = lastCom.length; k < o; k++) {
        newCom.push(lastCom[k] + toAdd[j]);
      }
    }

    table.push(newCom);
  }

  return table[table.length - 1];
};
