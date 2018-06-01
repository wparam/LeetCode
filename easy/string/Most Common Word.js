
// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

// Example:
// Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.
 

// Note:

// 1 <= paragraph.length <= 1000.
// 1 <= banned.length <= 100.
// 1 <= banned[i].length <= 10.
// The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
// paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
// Different words in paragraph are always separated by a space.
// There are no hyphens or hyphenated words.
// Words only consist of letters, never apostrophes or other punctuation symbols.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let str = paragraph.replace(/[!?',;.]/gi, '');
    for(let i = 0, l=banned.length; i<l; i++){
        str = str.replace(new RegExp(banned[i], 'gi'), '');
    }
    let map = new Map(),
        result = '',
        count = 1,
        strArr = str.toLowerCase().split(' ');
        strArr.forEach((n) => {
            if(!n)
                return false;
            if(count === 1)
                result = n;
            if(!map.has(n))
                map.set(n, 1);
            else{
                let mapv = map.get(n) + 1;
                if(mapv > count){
                    count = mapv;
                    result = n;
                }
                map.set(n, mapv);
            }
        });
    return result;
};

console.log(mostCommonWord("Bob. hIt, baLl",["bob", "hit"]));