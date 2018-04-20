// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, 
//as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. 
//For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). 
//We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".
 

// Note:

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let base = 'a'.charCodeAt();
    if(!words || words.length === 0)
        return 0;
    let result = words.map((n)=>{
        let sum = '';
        for(let i=0, l=n.length; i<l; i++){
            sum += morse[n[i].charCodeAt() - base];
        }
        return sum;
    });
    let map = new Map();
    for(let i=0, l=result.length; i<l; i++){
        if(!map.has(result[i]))
            map.set(result[i],0);
    }
    return map.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));