# Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

# Example 1:

# Input: words = ["bella","label","roller"]
# Output: ["e","l","l"]
# Example 2:

# Input: words = ["cool","lock","cook"]
# Output: ["c","o"]

from typing import List


def commonChars( words: List[str]) -> List[str]:
  sorted_list = sorted(words, key=len)
  res = []
  chars = set(sorted_list[0])
  for ch in chars:
    frequency = min(word.count(ch) for word in words)
    res += ch * frequency
  
  return res

print(commonChars(["cool","lock","cook"]))