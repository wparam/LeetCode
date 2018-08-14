//[$tag=jinzhi$]
// Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

// Note:

// All letters in hexadecimal (a-f) must be in lowercase.
// The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, 
// the first character in the hexadecimal string will not be the zero character.
// The given number is guaranteed to fit within the range of a 32-bit signed integer.
// You must not use any method provided by the library which converts/formats the number to hex directly.
// Example 1:

// Input:
// 26

// Output:
// "1a"
// Example 2:

// Input:
// -1

// Output:
// "ffffffff"

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let arr = [];
    let two_true_code = Math.abs(num).toString(2);
    if(num > 0){
        for(let i = 0, l = 32 - two_true_code.length; l; i++){
            arr[i] = 0;
            if(two_true_code[i] === '0' || two_true_code[i] === '1')
                arr[i] = parseInt(two_true_code[i]));
            else
                arr.unshift(0);
            console.log(arr);
        }
        arr = [].concat(arr, Array.from(two_true_code));
    }else{
        let inc = 1;
        for(let i = 0; i<32; i++){
            if(two_true_code[i] === '0' || two_true_code[i] === '1'){
                let v = (parseInt(two_true_code[i])^1) + inc;
                if(v>1){
                    arr.unshift(0);
                    inc=1;
                }else{
                    arr.unshift(v);
                    inc = 0;
                } 
            }else
                arr.unshift(1);
        }
        arr[31] = 1;
    }
    return arr.join('');
};

console.log(toHex(4));
// console.log(toHex(-4));