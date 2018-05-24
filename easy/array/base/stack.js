class Stack{
    constructor(){
        this.arr = [];
    }
    pop(){
        this.arr.pop();
    }
    push(ele){
        this.arr.push(ele);
    }
}
const signs = [
    
]
var transform = (form) => {
    //transform mid to post
    let result = [];
    for(let i = 0, l=form.length; i<l; i++){
        let j = i;
        while(j<l && /\d/gi.test(form[j])){
            j++;
        }
        result.push(parseInt(form.substring(i, j)));
        i = j;
    }
    return result;
};

var readNumber

var calculate = (form) => {

};

var calculator = (form) => {
    return calculate(transform(form));
};

// console.log(calculator('9+(2-1)*3-6/2'));
console.log(transform('9+(20-1)*3-6/2'));