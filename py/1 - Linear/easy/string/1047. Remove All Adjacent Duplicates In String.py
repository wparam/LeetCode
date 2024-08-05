# https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

from collections import deque


def removeDuplicates( s: str) -> str:
    stack = deque()

    for item in s:
        if len(stack)>0 and stack[-1] == item:
            stack.pop()
        else:
            stack.append(item)
    
    return ''.join(stack)


print(removeDuplicates("azxxzy"))