/**
 * Find all the prime numbers < n
 * Normal solution
 * @param  {} n
 * @retuen []
 */
var prime1 = function(n){
    let result = [2],
        flag = true;
    for(let i = 3; i<n; i+=2){
        flag = true;
        for(let j = 3; j<=Math.sqrt(i); j++){
            if(i % j === 0){
                flag = false;
                break;
            }
        }
        if(flag)
            result.push(i);
    }
    console.log(result.length);
};


/**
 * Find all the prime numbers < n
 * Normal solution, using function
 * @param  {} n
 * @retuen []
 */
var prime2 = function(n){
    let result = [2];
    for(let i = 3; i<n; i+=2){
        if(isPrime(i))
            result.push(i);
    }

    function isPrime(m){
        for(let j = 3; j<=Math.sqrt(m); j++){
            if(m % j === 0){
                return false;
            }
        }
        return true;
    }
    console.log(result.length);
};

/**
 * Find all the prime numbers < n
 * Shai method
 * @param  {} n
 * @retuen []
 */
var prime3 = function(n){
    for(let i = 2; i<n; i++){
        console.log(i);
    }


};

var s = new Date();

prime1(1000000);
console.log('use %s s', (new Date() - s)/1000);

var s1 = new Date();

prime2(1000000);
console.log('use %s s', (new Date() - s1)/1000);

// console.log(new Date());
// console.log(prime3());
// console.log(new Date());







