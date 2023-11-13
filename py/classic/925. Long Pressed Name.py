# Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

# You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

# Example 1:

# Input: name = "alex", typed = "aaleex"
# Output: true
# Explanation: 'a' and 'e' in 'alex' were long pressed.
# Example 2:

# Input: name = "saeed", typed = "ssaaedd"
# Output: false
# Explanation: 'e' must have been pressed twice, but it was not in the typed output.

def isLongPressedName(name: str, typed: str) -> bool:
  i = 0
  li = len(name)
  
  if len(typed) < len(name):
    return False
  
  if name[0] != typed[0] or name[li - 1] != typed[len(typed) - 1]:
    return False
  
  for j in range(len(typed)):
    if i < li and name[i] == typed[j]:
      i += 1
    elif j == 0 or typed[j] != typed[j-1]:
      return False
  
  return i == li 
      

print(isLongPressedName("alex", "aaleex"))