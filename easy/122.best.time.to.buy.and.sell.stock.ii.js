// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0;
  }

  let profit = 0;
  let buyIn = -1;

  for(let i = 1, n = prices.length; i < n; i++) {
    if (buyIn === -1 && prices[i] - prices[i - 1] > 0) {
      buyIn = prices[i - 1];
    } else if (buyIn !== -1 && prices[i] - prices[i - 1] <= 0) {
      profit += prices[i - 1] - buyIn;
      buyIn = -1;
    }
  }

  if (buyIn !== -1 && prices[prices.length - 1] - prices[prices.length - 2] >= 0) {
    profit += prices[prices.length - 1] - buyIn;
  }

  return profit;
};
