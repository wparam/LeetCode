// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

// Example 1:

// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8


const assert = require('assert')

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.arr = [...nums];
  this.arr.sort(function(a, b){ return b-a; })
  this.arr = this.arr.slice(0, k);
  this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if(val <= this.arr[ this.k - 1 ]){
    return this.arr[ this.k - 1 ];
  }

  //bigger one should be inserted
  //binary search and find the close larger
  let left = 0;
  let right = this.k - 1;
  let lower = -1;
  while(left <= right){
    let mid = (left + right) >> 1;
    if(this.arr[mid] < val){
      lower = mid;
      right = mid - 1;
    }else if(this.arr[mid] > val){
      left = mid + 1;
    }else{
      lower = mid;
      break;
    }
  }

  this.arr.splice( lower, 0, val )
  return this.arr[ this.k - 1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

assert.equal(kthLargest.add(3), 4)
assert.equal(kthLargest.add(5), 5)
assert.equal(kthLargest.add(10), 5)
assert.equal(kthLargest.add(9), 8)
assert.equal(kthLargest.add(4), 8)