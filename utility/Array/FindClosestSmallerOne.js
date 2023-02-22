const assert = require('assert');

const binarySearch = function(src, n){
  let left = 0;
  let right = src.length - 1;
  // console.log(`---------------target is ${n}`)
  while(left <= right){
    const mid = (left + right) >> 1;
    // console.log(`left is ${src[left]}, right: ${src[right]}, mid is ${src[mid]}`);
    if(src[mid]<n){
      left = mid + 1;
    }else if(src[mid]>n){
      right = mid - 1;
    }else{
      return mid;
    }
  }
  return -1;
}


const test1 = [0, 1, 5, 12, 24, 67, 677, 2244]
assert.equal(binarySearch(test1, 0), 0)
assert.equal(binarySearch(test1, 1), 1)
assert.equal(binarySearch(test1, 13), -1)
assert.equal(binarySearch(test1, 24), 4)
assert.equal(binarySearch(test1, 100), -1)
assert.equal(binarySearch(test1, 677), 6)
assert.equal(binarySearch(test1, 2244), 7)
assert.equal(binarySearch(test1, 2244112), -1)


const findClosestSmaller = function(src, n, comparator = (a,b)=>{ return a-b; }){
  let left = 0;
  let right = src.length - 1;
  let lowest = -1;
  // console.log(`---------------target is ${n}`)
  while(left <= right){
    const mid = (left + right) >> 1;
    // console.log(`left is ${src[left]}, right: ${src[right]}, mid is ${src[mid]}`);
    const match = comparator(src[mid], n);
    if(match < 0){
      left = mid + 1;
      lowest = mid;
    }else if(match > 0){
      right = mid - 1;
    }else{
      return mid;
    }
  }
  return lowest;
  
}


assert.equal(findClosestSmaller(test1, 0), 0)
assert.equal(findClosestSmaller(test1, 1), 1)
assert.equal(findClosestSmaller(test1, 2), 1)
assert.equal(findClosestSmaller(test1, 13), 3)
assert.equal(findClosestSmaller(test1, 36), 4)
assert.equal(findClosestSmaller(test1, 100), 5)
assert.equal(findClosestSmaller(test1, 677), 6)
assert.equal(findClosestSmaller(test1, 2356), 7)
assert.equal(findClosestSmaller(test1, 235600), 7)
