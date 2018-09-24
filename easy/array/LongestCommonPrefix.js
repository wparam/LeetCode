// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0)
        return '';
    if(strs.length === 1)
        return strs[0];
    let ret = '',
        count = 0;
    while(true){
        let temp = strs[0][count];
        for(let i=0, l=strs.length; i<l; i++){
            if(strs[i].length === 0 ||!strs[i][count] || strs[i][count]!==temp)
                return count === 0 ? '' : ret;
        }
        ret += temp;
        count++;
    }
};

console.log(longestCommonPrefix(["c", "c"]));