// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = Number.MIN_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0, l=nums.length; i<l; i++){
        if(sum < 0)
            sum = nums[i];
        else
            sum+=nums[i];
        if(max<sum ){
            max = sum;
        }
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));