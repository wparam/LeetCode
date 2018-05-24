class Stack{
    constructor(){
        this.arr = [];
    }
    readPop() {
        if(this.arr.length === 0)
            return null;
        return this.arr[this.arr.length - 1];
    }
    pop(){
        this.arr.pop();
    }
    push(ele){
        this.arr.push(ele);
    }
    clear() {
        this.arr = [];
    }
}

const signs = [ ')', '*', '/', '+', '-', '(' ];

var transform = (form) => {
    let stack = new Stack();
    //transform mid to post
    let result = [];
    for(let i = 0, l=form.length; i<l; i++){
        if(/\d/gi.test(form[i])){
            let j = i;
            while(j<l && /\d/gi.test(form[j])){
                j++;
            }
            result.push(parseInt(form.substring(i, j)));
            i = --j;
        }else{
            console.log(form[i]);
        }
    }
    return result;
};


var calculate = (form) => {

};

var calculator = (form) => {
    return calculate(transform(form));
};

// console.log(calculator('9+(2-1)*3-6/2'));
console.log(transform('9+(20-1)*3-6/2')); //should output 9 20 1 - 3 * + 6 2 / -