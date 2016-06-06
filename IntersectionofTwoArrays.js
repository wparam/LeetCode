//  Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Note:

//     Each element in the result must be unique.
//     The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length===0 || nums2.length===0)
        return [];
    var result = [],
        l1 = nums1.length,
        l2 = nums2.length;
    for(var i = 0; i<l1; i++){
        if(nums2.indexOf(nums1[i])>=0 && result.indexOf(nums1[i])<0)
            result.push(nums1[i]);
    }
    return result;
};

console.log(intersection([1,2,2,1,2,34,5,1,2,4,1], [2,2,2,4,1,3]));