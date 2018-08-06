// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Returns: True
// Example 2:

// Input: 14
// Returns: False


/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let a = 1;
    while(a * a < num){
        a++;
    }
    return a*a === num;
};

console.log(isPerfectSquare(14));