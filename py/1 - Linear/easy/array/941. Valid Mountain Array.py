# Given an array of integers arr, return true if and only if it is a valid mountain array.

# Recall that arr is a mountain array if and only if:

# arr.length >= 3
# There exists some i with 0 < i < arr.length - 1 such that:
# arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
# arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
from typing import List

def validMountainArray(arr: List[int]) -> bool:
  if len(arr)<3:
    return False

  left = 0
  right = len(arr) - 1
  
  for i in range(len(arr)):
    if left < len(arr) - 1 and arr[left] < arr[left+1]:
      left += 1
    if right > 0 and arr[right] < arr[right - 1]:
      right -= 1
    
    if left < len(arr) - 1 and arr[left] >= arr[left+1] and right > 0 and arr[right] >= arr[right - 1]:
      break
  
  return left == right and left != 0 and left != len(arr) - 1
  
  


print(validMountainArray([0,1,2,3,4,5,6,7,8,9]))