# An array is monotonic if it is either monotone increasing or monotone decreasing.

# An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. 
# An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

# Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

# Example 1:

# Input: nums = [1,2,2,3]
# Output: true
# Example 2:

# Input: nums = [6,5,4,4]
# Output: true
# Example 3:

# Input: nums = [1,3,2]
# Output: false
from typing import List

def isMonotonic(nums: List[int]) -> bool:
  left = 0
  right = len(nums) - 1
  
  if nums is None:
    return False
  
  if len(nums) == 1:
    return True
  
  #if increase
  if nums[right] >= nums[left]:
    while(left < right - 1):
      if nums[left] > nums[left+1] or nums[right] < nums[right - 1]:
        return False
      left += 1
      right -= 1
    
    return nums[left] <= nums[right]
  else:
    while(left < right - 1):
      if nums[left] < nums[left+1] or nums[right] > nums[right - 1]:
        return False
      left += 1
      right -= 1
    
    return nums[left] >= nums[right]
  
print(isMonotonic([1,2,2,3]))
print(isMonotonic([6,5,4,4]))
print(isMonotonic([1,3,2]))