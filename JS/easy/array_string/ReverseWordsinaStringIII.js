// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(function(str){
        var stack=[],
            result = '';
        for(var i = str.length-1; i>=0; i--){
           result+=str[i];
        }
        return result;
    }).join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));