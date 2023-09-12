// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let inc = 1;
    let counter = digits.length - 1;
    while(inc > 0 && counter >=0){
        let v = digits[counter] + inc;
        if( v < 10 ){
            digits[counter] += inc;
            inc = 0;
        }
        else
            digits[counter] = 0;;
        counter--;
    }   
    if(inc > 0)
        digits.unshift(inc);
    return digits;
};

console.log(plusOne([9]));