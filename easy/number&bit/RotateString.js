// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

// Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true

// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false
// Note:

// A and B will have length at most 100.


/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A === B)
        return true;
    for(let i = 0, l=A.length; i<l; i++){
        if(A === B)
            return true;
        A = A.slice(1) + A[0];
    }
    return false;
};

var rotateString1 = function(A, B) {
    return A.length === B.length && (A+A).indexOf(B) >= 0;
};

console.log(rotateString1('abcde', 'cdeab'));