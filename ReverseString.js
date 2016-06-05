// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh". 

/**
 * @param {string} s
 * @return {string}
 */
'use strict';
var reverseString = function(s) {
    if(!s)
        return '';
    var sl = s.length;
    var result = [];
    for(;sl>0;sl--)
    {
        result.push(s[sl-1]);
    }    
    return result.join('');
};

var reverseString1 = function(s) {
    return s.reverse();
};

console.log(reverseString(''));