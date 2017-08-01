// any subsequence of the other strings.

// A subsequence is a sequence that can be derived from one sequence by deleting some characters without 
//changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty 
//string is a subsequence of any string.

// The input will be two strings, and the output needs to be the length of the longest uncommon subsequence. 
//If the longest uncommon subsequence doesn't exist, return -1.

// Example 1:
// Input: "aba", "cdc"
// Output: 3
// Explanation: The longest uncommon subsequence is "aba" (or "cdc"), 
// because "aba" is a subsequence of "aba", 
// but not a subsequence of any other strings in the group of two strings. 
// Note:

// Both strings' lengths will not exceed 100.
// Only letters from a ~ z will appear in input strings.

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if(a===b)
        return -1;
    let al = a.length;
    let bl = b.length;

    return a.indexOf(b)>=0 ? a.length : (
        b.indexOf(a) ? b.length : Math.max(al, bl)
    ) ;
    
};

console.log(findLUSlength('abcd', 'abcdefgh'));
console.log(findLUSlength('efgh', 'abcdefgh'));