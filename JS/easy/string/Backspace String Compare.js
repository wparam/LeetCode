// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
 

// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return transform(S) === transform(T);
};

var transform = (arr) => {
    let result = [];    
    for(let i = 0, l = arr.length; i<l; i++){
        if(arr[i] === '#'){
            result.pop();
        }else{
            result.push(arr[i]);
        }
    }
    return result.join('');
};
console.log(backspaceCompare("a##c", "#a#c"));