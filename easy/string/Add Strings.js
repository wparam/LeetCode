// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = [];
    let inc = 0;
    for(let i = 0, l = Math.max(num1.length, num2.length); i<l; i++){
        let left = num1[num1.length-1-i] || 0,
            right = num2[num2.length-1-i] ||0;
        let s = parseInt(left) + parseInt(right) + inc;
        result.unshift(s % 10);
        inc = Math.floor(s / 10);
    }
    if(inc > 0)
        result.unshift(inc);
    return result.join('');
};

console.log(addStrings('9', '99'));