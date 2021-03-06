// Write an algorithm to determine if a number is "happy".
//
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
//
// Example: 19 is a happy number
//
//     12 + 92 = 82
//     82 + 22 = 68
//     62 + 82 = 100
//     12 + 02 + 02 = 1

function getSum(n) {
  var sum = 0;

  while (n >= 10) {
    sum += Math.pow(n % 10, 2);
    n = (n / 10) >> 0;
  }

  return sum + Math.pow(n, 2);
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  if (n < 1) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  var prob1 = n;
  var prob2 = n;
  var i;

  while (true) {

    for (i = 0; i < 5; i++) {
      prob1 = getSum(prob1);

      if (prob1 === 1) {
        return true;
      }

      if (prob1 === prob2) {
        return false;
      }
    }

    prob2 = getSum(prob2);
  }

};
