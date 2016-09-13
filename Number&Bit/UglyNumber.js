//  Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
//For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

// Note that 1 is typically treated as an ugly number. 

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    var f2 = num%2,
        f3 = num%3,
        f5 = num%5;
    if(num/2 === 1 )
        return true;
    if(num/3 =)
    if(f2 === 0)
        return isUgly(num/2);
    if(f3 === 0)
        return isUgly(num/3);
    if(f5 === 0)
        return isUgly(num/5);
    
};