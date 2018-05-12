/**
 * Count how many sub strings in on given string
 * @param  {} s
 */
var countSubString = (s, sub)=>{
    let temp = s,
        c = 0;
    while(temp.indexOf(sub) >= 0){
        c++;
        let nidx = temp.indexOf(sub) + sub.length + 1;
        if(nidx > temp.length - 1){
            break;
        }
        temp = temp.substring(temp.indexOf(sub) + sub.length) + 1;
        console.log(temp);
    }
    return c;
};


console.log(countSubString("abfsfwifjabdjksfjsfjwijab", 'ab'));