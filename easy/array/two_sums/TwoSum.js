// Learn from Hash way
// when two element coorespondent to each other, then you can use hashmap


// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/**
 * O(Nlog(n))
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sorted =  nums.slice(0);
    sorted.sort((a, b) => {
        if( a > b )
            return 1;
        if(a < b )
            return -1;
        return 0;
    });
    let left = 0,
        right = nums.length - 1;
    while(left !== right){
        let v = sorted[left] + sorted[right];
        if(v === target)
            return [nums.indexOf(sorted[left]), nums.lastIndexOf(sorted[right])];
        if(v > target)
            right --;
        if(v < target)
            left ++;
    }
    return nums;
    
};

var twoSumHash = function(nums, target) {
    let map = new Map();
    for(let i = 0, l=nums.length; i<l; i++){
        if(map.has(nums[i]))
            return [map.get(nums[i]), i];
        map.set(target - nums[i], i);
    }
    return nums;
};

console.log(twoSumHash([2,7,11,15], 9));