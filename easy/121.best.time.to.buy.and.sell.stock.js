// Say you have an array for which the ith element is the price of a given stock on day i.
//
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
//
// Example 1:
//
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
//
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
//
// Example 2:
//
// Input: [7, 6, 4, 3, 1]
// Output: 0
//
// In this case, no transaction is done, i.e. max profit = 0.

var maxProfit = function(prices) {
  if (!prices || prices.length < 2) {
    return 0;
  }

  var profitSell = prices[1];
  var profitBuy = prices[0];
  var profit = Math.max(0, profitSell - profitBuy);
  var lastPrice, curPrice;

  for (let i = 1, n = prices.length; i < n; i++) {
    lastPrice = prices[i - 1];
    curPrice = prices[i];

    if (profitBuy >= lastPrice) {
      profitBuy = lastPrice;
      profitSell = curPrice;
    } else if (curPrice > profitSell) {
      profitSell = curPrice;
    }

    profit = Math.max(profit, profitSell - profitBuy);
  }

  return profit;
};
