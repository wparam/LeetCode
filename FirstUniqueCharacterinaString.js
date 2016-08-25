
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(!s)
        return -1;
    for(var i = 0, l = s.length; i<l; i++){
        var li = s.indexOf(s[i]),
            ri = s.lastIndexOf(s[i]);
        if(li===ri){
            return li;
        }
    }
    return -1;
};

console.log(firstUniqChar('leetcode'));