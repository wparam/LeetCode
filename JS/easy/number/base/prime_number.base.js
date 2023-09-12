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
    let result = [false, false];
    for(let i = 2; i<=n; i++){
        result[i] = true;
    }
    for(let i = 2; i<n; i++){
        for(let j = i; i * j <=n; j++){
            result[i*j] = false;
        }
    }
    console.log(result.filter(n => n).length);

};

/**
 * Find all the prime numbers < n
 * Update Shai method
 * @param  {} n
 * @retuen []
 */
var prime4 = function(n){
    let result = [false, false];
    let sqt = Math.sqrt(n);
    for(let i = 2; i<=n; i++){
        result[i] = true;
    }
    for(let i = 2; i<=sqt; i++){
        for(let j = i; i * j <=n; j++){
            result[i*j] = false;
        }
    }
    console.log(result.filter(n => n).length);

};

var checkPrime = function(n){
    let sqt = Math.sqrt(n);
    if(n === 1) 
        return false;
    if(n === 2)
        return true;
    if(n % 2 === 0)
        return false;
    for(let i=3; i<=sqt; i+=2){
        if(n % i === 0)
            return false;
    }
    return true;
};

// var s = new Date();

// prime1(10000000);
// console.log('use %s s', (new Date() - s)/1000);

// var s1 = new Date();

// prime2(10000000);
// console.log('use %s s', (new Date() - s1)/1000);

// var s2 = new Date();
// prime3(1000000);
// console.log('use %s s', (new Date() - s2)/1000);

// var s3 = new Date();
// prime4(1000000);
// console.log('use %s s', (new Date() - s3)/1000);


console.log(checkPrime(1));





