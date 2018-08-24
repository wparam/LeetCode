// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let idx = checkPalidrome(s);
    if(idx === -1){
        return true;
    }else if(checkPalidrome(s.substring(idx+1, s.length - idx)) === -1 )
        return true;
    else
        return checkPalidrome(s.substring(idx, s.length - 1 - idx)) === -1;
};

var checkPalidrome = (s) => {
    let i = 0,
        l = s.length,
        half = parseInt(l/2);
    for(; i<=half; i++){
        if(s[i]!==s[l-1-i])
            return i;
    }
    return -1;
}

console.log(validPalindrome("abc"));