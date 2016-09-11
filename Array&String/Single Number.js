// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory? 

/**
 * @param {number[]} nums
 * @return {number}
 */
var assert = require('assert');
var singleNumber = function(nums) {
    var arr = [];
    for(var i=0, l=nums.length; i<l; i++)
        if(arr[nums[i]] === undefined){
            arr[nums[i]] = true;
        }else {
            arr[nums[i]] = false;
        }
    for(var j=0, l1=arr.length; j<l1; j++)
        if(arr[j] === true)
            return j;
    return ;
};

var singleNumberObject = function(nums) {
    var arr = {};
    for(var i=0, l=nums.length; i<l; i++)
        if(arr[nums[i]] === undefined){
            arr[nums[i]] = true;
        }else {
            arr[nums[i]] = false;
        }
    for(var j in arr){
        if(arr.hasOwnProperty(j) && arr[j] === true)
            return parseInt(j);
    }
    return ;
};

console.log(singleNumber([9,1,3,2,1,5,9,2,5,3,8, 8 , -1]));

console.log(singleNumberObject([9,1,3,2,1,5,9,2,5,3,-1]));

