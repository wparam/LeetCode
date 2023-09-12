//https://leetcode.com/problems/counting-bits/

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
// ans[i] is the number of 1's in the binary representation of i.



// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const res = [];

  for(let i=0; i<=n; i++){
    res[i] = Array.from(i.toString(2)).filter(item=>item==='1').length;
  }

  return res;
};


const toBinary = function(sn){
  const reminders = []

  do{
    reminders.push( sn % 2);
    sn = Math.floor(sn / 2);
  }while(sn > 0)

  for(let left = 0, right = reminders.length - 1; left < right; left++, right--){
    let temp = reminders[left];
    reminders[left] = reminders[right];
    reminders[right] = temp;
  }
  return reminders;
}


console.log(countBits(2))
console.log(countBits(5))



