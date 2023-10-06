from typing import List

# need to practice more

def insert(arr: List[int]):
  for i in range(1, len(arr)):
    base = arr[i]
    j = i - 1
    
    while j>=0 and base < arr[j]:
      arr[j+1] = arr[j]
      j -= 1
    
    arr[j + 1] = base
  
  return arr


test = [9, 2, 2, 6, 3, 5, 7, 1, 8]

print(insert(test))