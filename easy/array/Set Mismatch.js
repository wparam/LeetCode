// [$tag=map$]
// The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Note:
// The given array size will in the range [2, 10000].
// The given array's numbers won't have any order.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let arr = [];
    let duplicate=-1, miss=-1;
    for(let i = 0, l=nums.length; i<l; i++ ){
        if(arr[nums[i]]!==1)
            arr[nums[i]] = 1;
        else
            arr[nums[i]]++;
    }
    for(let i = 1, l = arr.length; i<=l; i++){
        if(arr[i]>1){
            duplicate = i;
        }else if(arr[i]!==1 && miss===-1){
            miss = i;
        }
    }
    return [duplicate, miss];
};

console.log(findErrorNums([1,2,2,4]));
