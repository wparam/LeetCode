// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(!nums1 || nums1.length === 0 || !nums2 || nums2.length===0)
        return [];
    nums1.sort();
    nums2.sort();
    for(var i = 0, l1 = nums1.length; i<l1; i++){
        for(var j = 0, l2 = nums2.length; j<l2; j++){
            if(nums1[i] === nums2[j]){
                
            }
        }
    }
};