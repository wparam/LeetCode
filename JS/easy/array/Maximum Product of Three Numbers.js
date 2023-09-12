// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Example 1:
// Input: [1,2,3]
// Output: 6
// Example 2:
// Input: [1,2,3,4]
// Output: 24
// Note:
// The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let arr = nums.sort((a, b) => {
        return a > b ? 1 : -1;
    });
    return Math.max(arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3], 
        arr[arr.length - 1] * arr[0] * arr[1]);
};

console.log(maximumProduct([-4,-3,-2,-1,60]));