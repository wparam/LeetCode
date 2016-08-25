// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var input = s.toUpperCase();
    var result = 0;
    for(var i=0, l=s.length; i<l; i++){
        result += getNum(s[i]) * Math.pow(26, l-i-1);
    }
    return result;
    function getNum(char){
        return char.charCodeAt() - 'A'.charCodeAt() + 1;
    }
};

console.log(titleToNumber('ZZ'));