// Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

// For example, with A = "abcd" and B = "cdabcdab".

// Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

// Note:
// The length of A and B will be between 1 and 10000.

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let count = 1;
    let ra = A;
    if(A.length > B.length){
        return A.indexOf(B)>=0 ? 1 : ((A + A).indexOf(B) >=0 ? 2 : -1 ) ;
    }
    while(true){
        if(ra.indexOf(B)>=0)
            return count;
        if(ra.length >= B.length + 2 * A.length)
            return -1;
        ra = ra + A;
        count++;
    }
};
console.log(repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab","ba")); 