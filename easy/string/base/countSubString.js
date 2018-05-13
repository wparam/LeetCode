/**
 * Count how many sub strings in on given string
 * @param  {} s
 */
var countSubString = (s, sub)=>{
    let temp = s,
        c = 0;
    while(temp.indexOf(sub) >= 0){
        c++;
        let nidx = temp.indexOf(sub) + sub.length;
        if(nidx > temp.length - 1){
            break;
        }
        temp = temp.substring(nidx);
    }
    return c;
};


var countSubStringRegex = (s, sub)=>{
    return s.match(new RegExp(sub, 'gi')).length;
};


console.log(countSubStringRegex("10101", '01'));