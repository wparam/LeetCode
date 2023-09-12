
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction 
//(ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:

// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)

// Example 2:

// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.
// [3, 8, 7, 1, 4, 5]
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var increaseArr = [],
        profit = 0,
        cursor = 1;
    if(!prices || prices.length<2)
        return 0;
    for(var i=0, l=prices.length; i<l; i++){
        while(cursor<=l-1&&prices[cursor]>=prices[i]){
            if(prices[cursor] - prices[i] > profit)
                profit = prices[cursor] - prices[i];
            cursor++;
        }
        if(cursor === l-1)
            return profit;
        else    
            i = cursor-1;
    }
    return profit;
};
console.log(maxProfit([1]));