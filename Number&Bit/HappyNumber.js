// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n === 0)
        return false;
    if(n === 1)
        return true;
    var passed = [n],
        result=getSum(n);
    while(result!==1){
        if(passed.indexOf(result)>=0)
            return false;
        else{
            passed.push(result);
        }
        result = getSum(result);
    }
    return true;
    function getSum(input){
        var sum = 0;
        while(input>0){
            sum += Math.pow(input % 10, 2);
            input = (input / 10) |0;
        }
        return sum;
    }
        
};
console.log(isHappy(19));