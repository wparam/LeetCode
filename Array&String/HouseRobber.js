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
    var _g_max = {};
    if(!nums || nums.length === 0)
        return 0;
    if(nums.length === 1)
        return nums[0];
    if(nums.length ===2)
        return Math.max(nums[0], nums[1]);
    var arrMax = {};
    for(var i=0, l=nums.length; i<l;i++){
        if(i===0){
            arrMax[i] = l[i];
            continue;
        }
        if(i===1){
            arrMax[i] = Math.max(l[0], l[1]);
            continue;
        }
        arrMax[i] = Math.max(arrMax[i-2] + l[i], arrMax[i-1]);
    }
    return arrMax[i-1];
    //return Math.max(rob(nums.slice(0, nums.length-1)), rob(nums.slice(0, nums.length-2)) + nums[nums.length-1]);
};

console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]));