from typing import List
import sys

def partition(arr: List[int], left: int, right: int):
  
  base = arr[left]
  i, j = left, right
  while i<j:
    while i < j and arr[j] >= base:
      j -= 1
    while i < j and arr[i] <= base:
      i += 1
    if i <= j:
      arr[i], arr[j] = arr[j], arr[i]
  
  arr[left], arr[i] = arr[i], arr[left]
  
  return i


def quick(arr: List[int], left: int, right: int):
  if left >= right:
    return
  
  pivot = partition(arr, left, right)

  quick(arr, left, pivot - 1)
  quick(arr, pivot + 1, right)
  
  return arr
    
test = [9, 14, 22, 21, 22, 6, 3, 5, 7, 1, 8]

print(quick(test, 0, len(test) - 1))

