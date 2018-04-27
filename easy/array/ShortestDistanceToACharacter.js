// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

// Note:

// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let result = [],
        l  = S.length;
    for(let i = 0, prev = Number.MIN_SAFE_INTEGER / 2; i<l; i++){
        if(S[i] === C){
            result[i] =  0;
            prev = i;
        }else 
            result[i] = i - prev;
    }
    for(let i = l - 1, prev = Number.MAX_SAFE_INTEGER / 2; i>=0; i--){
        if(S[i] === C){
            result[i] =  0;
            prev = i;
        }else 
            result[i] = Math.min(result[i],  prev - i);
    }

    return result;
};

console.log(shortestToChar('loveleetcode', 'e'));