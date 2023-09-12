// We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

// Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

// Example 1:
// Input: [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Note: The length of the input array will not exceed 20,000.

/**
 * bucket solution, fast but not working with negtive values
 * @param {number[]} nums
 * @return {number}
 */
var findLHS_1 = function(nums) {
    let extra = [];
    for(let i = 0, l=nums.length; i<l; i++){
        if(extra[nums[i]]===undefined){
            extra[nums[i]] = 1;
        }
        else
            extra[nums[i]]++;
    }
    let max = 0;
    for(let i=0,l=extra.length; i<l; i++){
        if(extra[i] + extra[i+1] > max){
            max = extra[i] + extra[i+1];
        }
    }
    return max;
};

var findLHS = function(nums) {
    let map = new Map(),
        mx  = 0;
    for(let i = 0, l = nums.length; i<l; i++){
        if(!map.has(nums[i]))
            map.set(nums[i], 1);
        else
            map.set(nums[i], map.get(nums[i])+1);
        mx = Math.max(mx, (map.get(nums[i]-1)||Number.MIN_SAFE_INTEGER) + map.get(nums[i]), 
            (map.get(nums[i]+1)||Number.MIN_SAFE_INTEGER) + map.get(nums[i]))
    }
    return mx;
};

console.log(findLHS([1,1,1,1]));