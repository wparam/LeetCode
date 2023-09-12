// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

// Example 1:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var flag = true,
        f1 = ['Q','W','E','R','T','Y','U','I', 'O', 'P'],
        f2 = ['A','S','D','F','G','H','J','K','L'],
        f3 = ['Z','X', 'C','V','B','N','M'],
        j = 0,
        result = [];
    for(var k = 0, wordslength = words.length; k< wordslength; k++){
        var bigworkds=  words[k].toUpperCase(),
            wlen = bigworkds.length;
        for(j=0; j<wlen; j++){
            if(f1.indexOf(bigworkds[j])<0){
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(words[k]);
            continuUppere;
        }
        else
            flag = true;
        
        for(j=0; j<wlen; j++){
            if(f2.indexOf(bigworkds[j])<0){
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(words[k]);
            continue;
        }
        else
            flag = true;
        for(j=0; j<wlen; j++){
            if(f3.indexOf(bigworkds[j])<0){
                flag = false;
                break;
            }
        }
        if(flag)
            result.push(words[k]);
        else
            flag = true;
    }
    return result;

};

var findWords = function(words) {
    //return words.toLowerCase().match
};


console.log( findWords(["qz","wq","asdddafadsfa","adfadfadfdassfawde"]));