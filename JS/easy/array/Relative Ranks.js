// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

// Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
// For the left two athletes, you just need to output their relative ranks according to their scores.
// Note:
// N is a positive integer and won't exceed 10,000.
// All the scores of athletes are guaranteed to be unique.


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var sorted = nums.slice(0).sort((a, b ) => {
        if(a>b)
            return -1;
        if(a < b)
            return 1;
        return 0;
    });
    
    for(let i = 0, l=nums.length; i<l; i++){
        let idx = sorted.indexOf(nums[i]);
        nums[i] = (idx + 1).toString();
        if(idx === 0)
            nums[i] = 'Gold Medal';
        if(idx === 1)
            nums[i] = 'Silver Medal';
        if(idx === 2)
            nums[i] = 'Bronze Medal';
    }
    
    return nums;
};

console.log(findRelativeRanks([10,3,8,9,4]));