var randomArray = (size, left, right) =>{
    if(!size)
        return [];
    let result = [];
    for(let i = 0; i<size; i++){
        //without '+1' is generating [left, right) range
        //result.push( Math.floor( Math.random() * (right - left ) + left )  );
        result.push( Math.floor( Math.random() * (right - left + 1) + left )  );
    }
    return result;
}
for(let i = 0; i<10; i++ )
console.log(randomArray(10, 3, 15));


