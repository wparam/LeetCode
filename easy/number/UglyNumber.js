//  Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
//For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

// Note that 1 is typically treated as an ugly number. 

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(!num)
        return false;
    if(num === 1)
        return true;
    var col = [2, 3, 5];
    for(var i=0;i<3; i++){
        if(num % col[i] === 0){
            return isUgly(num/col[i]);
        }
    }
    return false;  
};

console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));