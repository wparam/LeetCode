// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

// Please note that the string does not contain any non-printable characters.

// Example:

// Input: "Hello, my name is John"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(!s)
        return 0;
    if(s.indexOf(' ')<0)
        return 1;
    return s.split(' ').filter((n)=>n!==' '&&n.length>0).length;
};