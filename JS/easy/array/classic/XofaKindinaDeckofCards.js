// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.
 

// Example 1:

// Input: [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
// Example 2:

// Input: [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.
// Example 3:

// Input: [1]
// Output: false
// Explanation: No possible partition.
// Example 4:

// Input: [1,1]
// Output: true
// Explanation: Possible partition [1,1]
// Example 5:

// Input: [1,1,2,2,2,2]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[2,2]

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let arr = [];
    for(let i=0, l=deck.length; i<l; i++){
        if(arr[deck[i]] === undefined)
            arr[deck[i]] = 1;
        else
            arr[deck[i]] = arr[deck[i]] + 1;
    }
    let g = -1;
    console.log(arr);
    for(let i=0, l=arr.length; i<l; i++){
        console.log(g);
        console.log(arr[i]);
        if(arr[i]!==undefined){
            if(g === -1){
                g = arr[i];
            }else{
                g = g !== arr[i] ? findMCD(Math.min(g, arr[i]), Math.max(g, arr[i])) : g;
            }
        }
        
    }
    return g >= 2;
};

var findMCD = (a, b) => {
    if(Number.isNaN(a) || Number.isNaN(b))
        return;
    if( b % a === 0) return a;
    else
        return findMCD(b % a, a);
}

console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));