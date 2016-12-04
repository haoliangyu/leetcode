// Description:
//
// Count the number of prime numbers less than a non-negative number, n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n === 0) {
   return 0;
  }

  let dict = new Array(n + 1).fill(true);
  let count = 0;

  for (let i = 2; i < n; i++) {
   if (dict[i]) {
     count++;

     for (let j = i * i; j < n; j += i) {
       dict[j] = false;
     }
   } else {
     continue;
   }
  }

  return count;
};
