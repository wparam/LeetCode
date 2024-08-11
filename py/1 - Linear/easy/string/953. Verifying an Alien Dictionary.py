# https://leetcode.com/problems/verifying-an-alien-dictionary/description/

# In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

# Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.


# Example 1:

# Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
# Output: true
# Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted

from typing import List
import re

def isAlienSorted(words: List[str], order: str) -> bool:
  if len(words) == 1:
    return True
  
  dict1 = { char: index for index, char in enumerate(order) }
  
  def convert_word(word: str):
    print([dict1[char] for char in word])
    return [dict1[char] for char in word]
    
  for i in range(len(words)-1):
    if convert_word(words[i]) > convert_word(words[i+1]):
      return False
  return True
  
print(isAlienSorted(["dthkre","vvjrym","zvrzapstvm","dcjkqyrr","ditmpogp","gpzzmilb","dymhwov","bytjqyqupf","vjeaumrdy","lwvozpyx"], "tngjwhflzomueqkisxcpybdavr"))
