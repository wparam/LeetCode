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
        if(this.arr.length === 0)
            return;
        return this.arr.pop();
    }
    push(ele){
        this.arr.push(ele);
    }
    clear() {
        this.arr = [];
    }
}

const signs = {
    '(': 100,
    '*': 10,
    '/': 10,
    '+': 5,
    '-': 5
};


/**
 * pse func
 * for loop of 'expression'
 * {    if number
 *         output
 *      else
 *         if ')' -> output until '('
 *         if form[i] < stack.readPop() -> pop until form[i] > stack.readPop()
 *         if form[i] > stack.readPop() -> stack.push()
 * }
 * if expression finish -> ouput stack
 * @param  {} form
 */
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
            result = [].concat(result, popStackSigns(stack, form[i]));
            if(form[i] !== ')')
                stack.push(form[i]);
        }
    }
    while(stack.readPop()!==null)
        result.push(stack.pop());
    return result;
};

var popStackSigns = (stack, ch) => {
    let result = [];
    //special for '()'
    if(stack.readPop() === '(')
        return [];
    if(ch === ')'){
        while(stack.readPop()!==null){
            if(stack.readPop()!=='(')
                result.push(stack.pop());
            else    
                break;
        }
        stack.pop();
        return result;
    }
    if(signs[ch] <= signs[stack.readPop()]){
        while( signs[ch] <= signs[stack.readPop()] && stack.readPop() !== '('){
            result.push(stack.pop());
        }
    }

    return result;
}


var calculate = (form) => {
    let stack = new Stack();
    for(let i = 0, l = form.length; i<l; i++){
        if(/\d/gi.test(form[i])){
            stack.push(form[i]);
        }
        else{
            let l1 = stack.pop();
            let l2 = stack.pop();
            stack.push(parseExpression(l2 + form[i] + l1));
        }
    }
    return stack.pop(parseExpression);
};  

var parseExpression = function(str){
    return new Function('"use strict"; return (' + str + ')')();
}


var calculator = (form) => {
    return calculate(transform(form));
};

// console.log(calculator('9+(2-1)*3-6/2'));
console.log(calculator('9+(20-1)*3-6/2')); //should output 9 20 1 - 3 * + 6 2 / -  => 63
console.log(calculator('2*4+(6-2)/4+8-6')); //should output 24*62-4/+8+6-     =>  11
console.log(calculator('2*4+((6-2)/4+8)-6')); //should output 24*62-4/8++6-      =>  11