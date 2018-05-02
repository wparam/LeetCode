// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

// Input: S = "3z4"
// Output: ["3z4", "3Z4"]

// Input: S = "12345"
// Output: ["12345"]
// Note:

// S will be a string with length at most 12.
// S will consist only of letters or digits.
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let result = [];
    let map = new Map();
    for(let i = 0, l = S.length; i<l; i++){
        if(!/[0-9]/g.test(S[i])){
            let lower = S.substring(0, i) + S[i].toLowerCase()  + S.slice(i+1),
                upper = S.substring(0, i) + S[i].toUpperCase()  + S.slice(i+1);
            if(!map.has(lower))
                map.set(lower, [lower]);
            else{
                if(map.get(lower).indexOf(lower))
            }
            result.push();
            result.push(S.substring(0, i) + S[i].toLowerCase()  + S.slice(i+1));
        }
    }
    return result;
};

console.log(letterCasePermutation('a1b2'));