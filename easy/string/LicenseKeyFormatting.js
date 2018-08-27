// You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

// Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

// Given a non-empty string S and a number K, format the string according to the rules described above.

// Example 1:
// Input: S = "5F3Z-2e-9-w", K = 4

// Output: "5F3Z-2E9W"

// Explanation: The string S has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.
// Example 2:
// Input: S = "2-5g-3-J", K = 2

// Output: "2-5G-3J"

// Explanation: The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
// Note:
// The length of string S will not exceed 12,000, and K is a positive integer.
// String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and dashes(-).
// String S is non-empty.

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let res = [],
        l = 0;
    for(let i=S.length-1; i>=0; i--){
        if(l < K && S[i]!=='-' ){
            res.push(S[i].toUpperCase());
            l++;
        }
        if(l==K && i>0){
            res.push('-');
            l = 0;
        }
    }
    if(res[res.length-1]==='-')
        res[res.length-1] = undefined;
    return res.reverse().join('');
};



// The RegExp is splitting the string by empty strings that have one or more K-sized groups after them

// Split by empty string means that join of the result is the initial string. For example string 'abc' split by empty string will become ['a', 'b', 'c'] vs split by 'b' that is ['a', 'c']

// Lets go over the problem from the example of '2-5g-3-J' and 2 to understand th idea. First, lets make it '25G3J' by removing '-' and taking the result to upper case. Then the logic of the split RegExp would be

// 2 - empty string after this char matches because it has 4 characters after it that can be split into two groups of two characters
// 5 - empty string after this char do not match because 3 characters after it cannot be split it into groups of 2 characters
// G - empty string after this char matches because it has 2 characters after it that is a group of two characters
// 3 - empty string after this char do not match because a single character after it can not form a group of 2 characters
// J - empty string after this char do not match because there should be at least one groups of two characters after
// so the split would become ['2', '5G', '3J'] then just join the split with '-' and it would become '2-5G-3J'

// And the code is

// const f = (S, K) => {
//   return S
//     .replace(/-/g, '')
//     .toUpperCase()
//     .split(RegExp(`(?=(?:.{${K}})+$)`))
//     .join('-')
// }
// Where

//             // empty string that is the match. So the initial srting would be splitted by each empty string that followes...
// (?=         // start of look-forward. Means that paransesized part is required but would not be part of the match
//   (?:       // mean do not use this group in the result. Need to be here because RegExp is used inside of split
//     .       // any character
//     {${K}}  // mix of JS string template with RegExp number of times to match what is right behind it. So it would be like {2} or {4}
//   )
//   +         // match thing that is right before it 1+ times
//   $         // end of the string
// )
// UPD: with newer Node this simplified code should also work

// const f = (S, K) => {
//   return S
//     .replace(/-/g, '').toUpperCase()
//     .replace(RegExp(`(?<=.)(?=(.{${K}})+$)`, 'g'), '-')
// }


var d = new Date().getTime();
console.log(licenseKeyFormatting("--aa--aa--aa", 2));
console.log( (new Date().getTime() - d) /1000 );