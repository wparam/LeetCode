// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    for(let k = 1, kl = nums.length; k<=kl; k++){
        result.push(k);
    }
    for(let i = 0, l = nums.length; i<l; i++){
        result[nums[i]-1] = 0;
    }
    let res = [];
    for(var j = 0, jl = result.length; j<jl; j++){
        if(result[j]!==0)
            res.push(j+1);
    }
    return res;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1, 1]));