 //[$tag=recursion2loop]
// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

// Example 1:
// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
// Example 2:
// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
// Note:
// cost will have a length in the range [2, 1000].
// Every cost[i] will be an integer in the range [0, 999].

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs_slow = function(cost) {
    let map = new Map();
    return Math.min(calculate(map, cost, 0), calculate(map, cost, 1));
};  

var calculate = (map, cost, start) => {    
    if(start > cost.length-1)
        return 0;
    if(start === cost.length-1)
        return cost[cost.length-1];
    let next = map.has(start + 1) ? map.get(start + 1) : calculate(map, cost, start + 1),
        nextplus =  map.has(start + 2) ? map.get(start + 2) : calculate(map, cost, start + 2);
    let min = cost[start] + Math.min(next, nextplus);
    map.set(start, min);
    return min;
};


var minCostClimbingStairs = (cost)=>{
    let f1 = 0, 
        f2 = 0,
        f0;
    for(let i = cost.length - 1; i>=0; i--){
        f0 = cost[i] + Math.min(f1, f2);
        f2 = f1; 
        f1 = f0;
    }
    return Math.min(f1, f2);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));