// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
//
// American keyboard
//
// Example 1:
//
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
//
// Note:
//
//     You may use one character in the keyboard more than once.
//     You may assume the input string will only contain letters of alphabet.

let rowOne = {
  q: true,
  w: true,
  e: true,
  r: true,
  t: true,
  y: true,
  u: true,
  i: true,
  o: true,
  p: true
};

let rowTwo = {
  a: true,
  s: true,
  d: true,
  f: true,
  g: true,
  h: true,
  j: true,
  k: true,
  l: true
};

let rowThree = {
  z: true,
  x: true,
  c: true,
  v: true,
  b: true,
  n: true,
  m: true
};

let isInRow = function(word, row) {
  for (let i = 0, n = word.length; i < n; i++) {
    if (row[word[i]] !== true) {
      return false;
    }
  }

  return true;
};

/**
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = function(words) {
  let results = [];

  for (let i = 0, n = words.length; i < n; i++) {
    let lower = words[i].toLowerCase();

    if (isInRow(lower, rowOne)) {
      results.push(words[i]);
      continue;
    }

    if (isInRow(lower, rowTwo)) {
      results.push(words[i]);
      continue;
    }

    if (isInRow(lower, rowThree)) {
      results.push(words[i]);
      continue;
    }
  }

  return results;
};
