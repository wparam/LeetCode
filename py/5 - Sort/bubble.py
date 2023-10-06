from typing import List

def bubble(arr: List[int]):
  for i in range(len(arr)):
    for j in range(i):
      if(arr[i] < arr[j]):
        arr[i], arr[j] = arr[j], arr[i]
  
  return arr


test = [9, 2, 2, 6, 3, 5, 7, 1, 8]

print(bubble(test))