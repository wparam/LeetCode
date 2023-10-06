from typing import List
import sys

def selection_sort(arr: List[int]):
  l = len(arr)
  for i in range(l):
    min = sys.maxsize
    mx = 0
    for j in range(i, l):
      if arr[j] < min:
        min = arr[j]
        mx = j
        
    arr[i], arr[mx]= arr[mx], arr[i]
    
  return arr


def selection_sort_v1(arr: List[int]):
  l = len(arr)
  
  for i in range(l - 1):
    k = i 
    
    for j in range(i + 1, l):
      if(arr[j] < arr[k]):
        k = j

    arr[i], arr[k] = arr[k], arr[i]
    
  return arr

test = [2, 2, 6, 3, 5, 7, 1, 8]

print(selection_sort_v1(test))