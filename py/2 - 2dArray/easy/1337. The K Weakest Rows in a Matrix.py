# You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

# A row i is weaker than a row j if one of the following is true:

# The number of soldiers in row i is less than the number of soldiers in row j.
# Both rows have the same number of soldiers and i < j.
# Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

from typing import List

class Solution:

    #shitty solution, beat 87% python though
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
      res : List[int] = []
      other: List[int] = []
      l = len(mat)
      for row_idx in range(len(mat[0])):
        for col_idx in range(l):
          if(len(res) == k):
            return res
          if(mat[col_idx][row_idx] == 0):
            if col_idx not in res:
              res.append(col_idx)
          if row_idx == len(mat[0]) - 1 and col_idx not in other and col_idx not in res:
            other.append(col_idx)
      
      return (res + other)[:k]

if __name__ == '__main__':
  source: List[List[int]] = [
      [1,1,1,1,1],
      [1,0,0,0,0],
      [1,1,0,0,0],
      [1,1,1,1,0],
      [1,1,1,1,1]
    ]
  
  solution = Solution()
  print(solution.kWeakestRows(source, 3))
  
  
  
  tes = [
    [1,0],
    [1,0],
    [1,0],
    [1,1]
  ]
  # print(solution.kWeakestRows(tes, 4))
  