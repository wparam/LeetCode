// You are a professional robber planning to rob houses along a street. 
//Each house has a certain amount of money stashed, 
//the only constraint stopping you from robbing each of them is that adjacent 
//houses have security system connected and it will automatically contact the police if 
//two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, 
//determine the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 * Solution:
 * the N time's monty f(n) == max(f(n-1), f(n-2) + n)
 */
var rob = function(nums) {
    if(!nums || nums.length === 0)
        return 0;
    if(nums.length === 1)
        return nums[0];
    if(nums.length ===2)
        return Math.max(nums[0], nums[1]);
    var result = 0;
    for(var i=0, l=nums.length; i<l; i++){
        
    }
    result += rob(nums) 
};