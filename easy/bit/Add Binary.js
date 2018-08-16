// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let inc = 0;
    let result = [];
    let sum = 0;
    for(let i = 0, l = Math.max(a.length, b.length); i<l; i++){
        sum = (parseInt(a[a.length - 1 - i]) || 0) + (parseInt(b[b.length - 1 - i]) || 0) + inc;
        if(sum > 1){
            result.unshift(sum-2);
            inc = 1;
        }else{
            result.unshift(sum);
            inc = 0;
        }
    }
    if(inc > 0){
        result.unshift(inc);
    }   
    return result.join('');
};

console.log(addBinary('1111', '1111'));