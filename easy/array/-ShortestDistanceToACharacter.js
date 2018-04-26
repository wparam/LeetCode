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
    let result = [];
    for(let i = 0, l = S.length; i<l; i++){
        if(S[i] === C){
            result.push(0);
            continue;
        }
        let flag = true,
            left = true,
            right = true,
            cursor = 1;
        while(left || right){
            if(i - cursor < 0){
                left = false; 
            }else{
                
            }
            if( i + cursor > l - 1){
                right = false;
            }
        }
    }
};