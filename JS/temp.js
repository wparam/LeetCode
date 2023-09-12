let col = [ {a : 1}, {b:2}, {c:3}];

//out { a: 1, b: 2, c:3 }

let res = col.reduce((pre, cur)=> 
    Object.assign(pre, cur), {});

console.log(res);