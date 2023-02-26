/*
Given  an  arbitrary  ransom  note  string  and  another  string  containing  letters from  all  the  magazines,  
write  a  function  that  will  return  true  if  the  ransom   note  can  be  constructed  from  the  magazines ;  otherwise,  it  will  return  false.   

Each  letter  in  the  magazine  string  can  only  be  used  once  in  your  ransom  note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote === magazine)
        return true;
    if(!ransomNote)
        return true;
    if(!magazine)
        return false;
    if(ransomNote.length > magazine.length)
        return false;
    var marr = [];
    for(var j = 0, ml = magazine.length; j<ml; j++)
        marr.push(magazine[j]);
    for(var i = 0, l = ransomNote.length; i<l; i++){
        var idx = -1;
        if((idx = marr.indexOf(ransomNote[i]))>=0){
            marr[idx] = undefined;
        }
        else{
            return false;
        }
    }
    return true;
};

console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'));
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('aa', 'ab'));