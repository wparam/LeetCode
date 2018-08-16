// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

// Subscribe to see which companies asked this question


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var col = {
        'I' : 1,
        'V' : 5,
        'X': 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    if(!s)
        return 0;
    var rome = s.toUpperCase();
    var result = 0;
    for(var i=0, l=s.length; i<l; i++){
        if(i>0 && col[s[i]] > col[s[i-1]])
            result += (col[s[i]] - col[s[i-1]]) - col[s[i-1]];
        else
            result += col[s[i]];
    }
    return result;
};
console.log(romanToInt('MMMCMXCIX'));