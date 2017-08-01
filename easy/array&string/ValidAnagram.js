// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
// 
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    var sum = 0,
        ss = 0,
        tt = 0,
        sSum = 0, 
        tSum = 0,
        s3 = 0,
        t3 = 0;
    for(var i = 0, l = s.length; i<l; i++){
        var num = s.charCodeAt(i) - t.charCodeAt(i);
        sum += num;
        ss += s.charCodeAt(i);
        tt += t.charCodeAt(i);
        sSum += Math.pow(s.charCodeAt(i), 2);
        tSum += Math.pow(t.charCodeAt(i), 2);
        s3 += Math.pow(s.charCodeAt(i), 3);
        t3 += Math.pow(t.charCodeAt(i), 3);
    }
    if(sum !== 0)
        return false;
    return (sSum === tSum) && (ss === tt) && (s3 === t3);
};

// "vbnxkji"
// "wqdtegp"

console.log(isAnagram('vbnxkji', 'wqdtegp'));

// console.log(isAnagram('hqbqo', 'lsnma'));