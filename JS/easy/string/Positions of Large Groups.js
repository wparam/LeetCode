// n a string S of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

// Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

// The final answer should be in lexicographic order.

 

// Example 1:

// Input: "abbxxxxzzy"
// Output: [[3,6]]
// Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
// Example 2:

// Input: "abc"
// Output: []
// Explanation: We have "a","b" and "c" but no large group.
// Example 3:

// Input: "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]
 

// Note:  1 <= S.length <= 1000

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let result = [];
    let ch = '',
        count = 0,
        ltIdx = 0;
    for(let i = 0, l=S.length; i<=l; i++){
        if(S[i]!==ch){
            if(count >= 3){
                result.push([ltIdx, i-1]);
            }
            ch = S[i];
            ltIdx = i;
            count = 1;
        }else{
            count++;
        }
    }
    return result;
};

console.log(largeGroupPositions('abcdddeeeeaabbbcd'));