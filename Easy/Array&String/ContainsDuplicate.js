// Given an array of integers, find if the array contains any duplicates. 

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {};
    if(nums.length===0)
        return false;
    for(var i = 0, l = nums.length; i<l; i++){
        if(!obj.hasOwnProperty(nums[i]))
            obj[nums[i]] = i;
        else{
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([2,1,3,4,1,2,4]));
console.log(containsDuplicate([2,1,3,34,12,21,4]));