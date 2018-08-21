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
    let flag = false;
        left = 0,
        right = s.length - 1;
    while(left < right){
        console.log(`left: ${s[left]}, right: ${s[right]}`);
        if(!flag && s[left] !== s[right])
            return false;
        if(s[left] === s[right]){
            left++;
            right--;
        }else if(s[left+1] === s[right] && !flag){
            left+=2;
            right--;
            flag = true;
        }else if(s[left] === s[right-1] && !flag){
            left++;
            right-=2;
            flag = true;    
        }else{
            return false;
        }
    }
    return true;
};

console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"));