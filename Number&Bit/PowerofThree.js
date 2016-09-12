// Given an integer, write a function to determine if it is a power of three.

// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
var assert = require('assert');
var isPowerOfThree = function(n) {
    if(n===0)
        return false;
    return Math.pow(3, Math.round((Math.log(n)/Math.log(3)))) === n;
};
assert.equal(isPowerOfThree(100), false);
assert.equal(isPowerOfThree(27), true);
