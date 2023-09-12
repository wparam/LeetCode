// Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of 
// set bits in their binary representation.

// (Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 
// 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

// Example 1:

// Input: L = 6, R = 10
// Output: 4
// Explanation:
// 6 -> 110 (2 set bits, 2 is prime)
// 7 -> 111 (3 set bits, 3 is prime)
// 9 -> 1001 (2 set bits , 2 is prime)
// 10->1010 (2 set bits , 2 is prime)
// Example 2:

// Input: L = 10, R = 15
// Output: 5
// Explanation:
// 10 -> 1010 (2 set bits, 2 is prime)
// 11 -> 1011 (3 set bits, 3 is prime)
// 12 -> 1100 (2 set bits, 2 is prime)
// 13 -> 1101 (3 set bits, 3 is prime)
// 14 -> 1110 (3 set bits, 3 is prime)
// 15 -> 1111 (4 set bits, 4 is not prime)
// Note:

// L, R will be integers L <= R in the range [1, 10^6].
// R - L will be at most 10000.

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    let sum = 0,
        subsum = 0;
    for(let i = L; i<=R; i++){
        let s = i.toString(2);
        subsum = 0;
        for(let j = 0, jl=s.length; j<jl; j++){
            if(s[j] === '1')
                subsum++;
        }
        if(isPrime(subsum)){
            sum++;
        }
    }
    return sum;
    function isPrime(n){
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
    }
};
// console.log(countPrimeSetBits(6,10));
console.log(countPrimeSetBits(990,1048));