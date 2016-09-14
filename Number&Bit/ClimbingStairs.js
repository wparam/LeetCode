// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if( n === 1)
        return 1;
    var sum = 0;
    if( n % 2 === 0 ){
        sum += 2;
        for( var i=1; i<n; i++){
            if(i % 2 ===0)
                sum += cFun(i + (n-i)/2)/cFun(i)/cFun((n-i)/2);
        }
    }
    else{
        sum += 1;
        for( var i=0; i<n; i++){
            if(i % 2 !==0)
                sum += cFun(i + (n-i)/2)/cFun(i)/cFun((n-i)/2);
        }
    }
    return sum;
    function cFun(a){
        if(a===1)
            return 1;
        return a * cFun(a-1);
    }

};

console.log(climbStairs(3));