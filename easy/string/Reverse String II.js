// Given a string and an integer k, you need to reverse the first k characters for every 2k characters 
// counting from the start of the string. If there are less than k characters left, reverse all of them. 
// If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other 
// as original.
// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range [1, 10000]

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var arr = [];
    for(let i of s){
        arr.push(i);
    }
    for(let i = 0, l=arr.length; i<l; i=i+2*k){
        let l = i, r = (i + k) - 1;
        while(l<r){
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        }
    }
    return arr.join('');
};

console.log(reverseStr("abcdefghxyzh", 2));