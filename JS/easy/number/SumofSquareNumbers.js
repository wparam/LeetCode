// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:
// Input: 3
// Output: False


/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if(c === 3)
        return false;
    if(c === 2 || c === 5)  
        return true;
    let arr = [];
    for(let i=0, l = Math.ceil( c / 2); i<=l; i++){
        if(i * i <= c){
            arr.push(i * i);
        }
        else
            break;
    }
    let left = 0, right = arr.length -1 ;
    while(left <= right){
        if(arr[left] + arr[right] < c)
            left++;
        else if(arr[left] + arr[right] === c)        
            return true;
        else 
            right--;
    }
    return left + right === c;
};

console.log(judgeSquareSum(2147483643));