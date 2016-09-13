// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// Note:
// The vowels does not include the letter "y". 

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var v = ['a', 'o', 'e', 'i', 'u', 'A', 'E', 'I', 'O', 'U'];
    var src = [];
    for(var i=0, l=s.length; i<l; i++){
        src.push(s[i]);
    }
    var rp = src.length - 1;
    for(var j=0, k=src.length; j<rp; j++){
        if(v.indexOf(src[j])>=0){
            while(v.indexOf(src[rp])<0){
                if(rp-1>j)
                    rp--;
                else
                    return src.join('');
            }
            var temp = src[j];
            src[j] = src[rp];
            src[rp] = temp;
            if(rp > j + 1)
                rp--;
            console.log(src);
        }
    }
    return src.join('');
};
console.log(reverseVowels('Noel sees Leon.'));

