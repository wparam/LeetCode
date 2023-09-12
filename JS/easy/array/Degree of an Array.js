// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:
// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:
// Input: [1,2,2,3,1,4,2]
// Output: 6
// Note:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = new Map(),
        left = new Map(),
        right = new Map();
    let longest = 1;
    for(let i = 0, l = nums.length; i<l; i++){
        if(map.has(nums[i])){
            let v = map.get(nums[i]);
            map.set(nums[i], ++v);
            longest = Math.max(longest, v);
        }else{
            map.set(nums[i], 1);
            left.set(nums[i], i);
        }
        right.set(nums[i], i);
    }
    let result = [];
    let min = Number.MAX_SAFE_INTEGER;
    for (var [key, value] of map.entries()) {
        if(longest === value)
            min = Math.min(min, right.get(key) - left.get(key));
    }
    return ++min;
};


console.log(findShortestSubArray([1,2,2,3,1,4,2]));