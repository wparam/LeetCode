const calc = (() => {
    let count = 0;
    return ()=>{
        count += 1;
        console.log(count);
    }
})();

calc();

calc();

calc();

calc();
