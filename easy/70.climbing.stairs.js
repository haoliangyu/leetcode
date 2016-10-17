// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  if (n <= 0) { return 0; }
  if (n === 1) { return 1; }
  if (n === 2) { return 2; }

  var n2 = 1;
  var n1 = 2;
  var all;

  for (var i = 2; i < n; i++) {
    all = n1 + n2;
    n2 = n1;
    n1 = all;
  }

  return all;
};
