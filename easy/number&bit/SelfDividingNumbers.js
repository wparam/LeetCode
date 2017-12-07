// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input: 
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
// Note:

// The boundaries of each input argument are 1 <= left <= right <= 10000.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers1 = function(left, right) {
    let res = [];
    while(left <= right){
        if(left > 1 && left < 10){
            res.push(left);
        }
        else if(left.toString().indexOf('0')>0){

        }
        else{
            let flag = true;
            let nums = Array.from(left.toString(10)).map(i => {
                if(i !== '1' && left % i !==0){
                    flag &= false;
                }
            });
            if(flag)
                res.push(left);
        }   
        left++;
    }
    return res;
};
var selfDividingNumbers2 = function(left, right) {
    let res = [];
    while(left <= right){
        if(left > 1 && left < 10){
            res.push(left);
        }
        else{
            let flag = true;
            let j = left;
            for(; j>0 ; j=j/10 |0){
                if(left % 10 === 0 || left % (j % 10) !==0)
                    break;
            }
            if(j === 0)
                res.push(left);
        }   
        left++;
    }
    return res;
};

console.log(selfDividingNumbers2(1,22));