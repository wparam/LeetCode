# Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

# Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.


def binaryGap(n: int) -> int:
  left = 0
  right = left + 1
  max_count = 0
  binary_str = bin(n)[2:]
  while right <= len(binary_str) - 1:
    while right <= len(binary_str) - 1 and binary_str[right] != '1':
      right += 1
      
    if right == len(binary_str):
      break
    
    max_count = max(max_count, right - left)
    left = right
    right += 1
    
  return max_count 
    
def binaryGap(n: int) -> int:
  binary_str = bin(n)[2:]
  last_indx = -1
  max_count = 0
  
  for i, bit in enumerate(binary_str):
    if bit == '1':
      if last_indx != -1:
        max_count = max(max_count, last_indx - i)
      last_indx = i
      
  return max_count


va = 5
print(binaryGap(5))

        