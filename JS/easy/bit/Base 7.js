// Given an integer, return its base 7 string representation.

// Example 1:
// Input: 100
// Output: "202"
// Example 2:
// Input: -7
// Output: "-10"
// Note: The input will be in range of [-1e7, 1e7].

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let result = [];
    let prefix = num < 0 ? '-' : '';
    num = Math.abs(num);
    if(num < 7)
        return prefix + num.toString();
    let div = 0;
    do{
        result.unshift( num % 7 );
        num = parseInt( num / 7 );
    }while(num >=7)
    
    return prefix + num + result.join('');
};

console.log(convertToBase7(100));