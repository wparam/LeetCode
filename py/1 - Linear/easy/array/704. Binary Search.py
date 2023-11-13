# Given an array of integers nums which is sorted in ascending order, and an integer target, 
# write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

# You must write an algorithm with O(log n) runtime complexity.
from typing import List



def search(nums: List[int], target: int) -> int:
  if nums is None:
    return -1
  
  left = 0
  right = len(nums) - 1
  
  while left<=right:
    mid = (left + right) //2      
    if target == nums[mid]:
      return mid
    elif nums[mid] < target:
      left = mid + 1
    else:
      right = mid - 1
  return -1    

print(search([-1,0,3,5,9,12], 9))

print(search([-1,0,3,5,9,12], 2))