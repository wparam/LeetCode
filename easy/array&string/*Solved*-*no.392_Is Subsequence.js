//https://leetcode.com/problems/is-subsequence/

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by 
// deleting some (can be none) of the characters without disturbing the relative positions of the 
// remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.


// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, 
// and you want to check one by one to see if t has its subsequence. In this scenario, 
// how would you change your code?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let reg = new RegExp(s.split('').join('\\w*'))
  return reg.test(t);
};


var isSubsequence2 = function (s, t) {
  let cursor = 0,
      l = t.length;
  for(let si=0, sl=s.length; si<sl; si++){
    let flag = false;

    for(let j=cursor; j<l; j++){
      if(t[j] === s[si]){
        cursor = j+1;
        flag = true;
        break;
      }
    }

    if(!flag){
      return false;
    }
  }
  return true;
};


console.log(isSubsequence('axc', 'ahbgdc'))
console.log(isSubsequence2('axc', 'ahbgdc'))
