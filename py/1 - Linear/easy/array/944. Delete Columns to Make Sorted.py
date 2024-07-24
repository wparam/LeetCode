# You are given an array of n strings strs, all of the same length.

# The strings can be arranged such that there is one on each line, making a grid.

# For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
# abc
# bce
# cae
# You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

# Return the number of columns that you will delete.

# https://leetcode.com/problems/delete-columns-to-make-sorted/description/

from typing import List

def minDeletionSize(strs: List[str]) -> int:
  l = len(strs[0])  
  
  count = 0
  for col in range(l):
    last_ele = ''
    for row in strs[1:]:
      if last_ele != '':
        if row[col] < last_ele:
          count+=1
          break
      last_ele = row[col]
  
  return count
  
print(minDeletionSize(["cba","daf","ghi"]))