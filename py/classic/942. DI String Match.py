# 本题关键在于思路, 由小及大, 和由大及小的两种方向, 是I则从最小的开始挑, 是D从最大的开始减, 总是对的

# A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

# s[i] == 'I' if perm[i] < perm[i + 1], and
# s[i] == 'D' if perm[i] > perm[i + 1].
# Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

 

# Example 1:

# Input: s = "IDID"
# Output: [0,4,1,3,2]
# Example 2:

# Input: s = "III"
# Output: [0,1,2,3]
# Example 3:

# Input: s = "DDI"
# Output: [3,2,0,1]
from typing import List


def diStringMatch(s: str) -> List[int]:
  res = []
  low = 0
  high = len(s) 
  for i in range(len(s)):
    if s[i] == 'I':
      res.append(low)
      low += 1
    else:
      res.append(high)
      high -= 1
  res.append(low)
  return res

print(diStringMatch("IDID"))