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
    let left = 1, right = num;
    while(left < right){
        let mid = parseInt((left + right)/2);
        if(mid * mid < num)
            left = mid + 1;
        else
            right = mid;
    }
    return left * left === num;
};

console.log(isPerfectSquare(16));