# https://leetcode.com/problems/remove-outermost-parentheses/description/

from collections import deque

def removeOuterParentheses( s: str) -> str:
    queue = deque()
    res = list(s)
    last_left_idx = -1
    for idx, ch in enumerate(res):

        if len(queue) == 0:
            queue.append(ch)
            last_left_idx = idx
            continue

        if queue[-1] != ch and len(queue) == 1:
            queue.pop()
            res[idx] = ''
            res[last_left_idx] = ''
            continue
        
        if queue[-1] == ch:
            queue.append(ch)
        else:
            queue.pop()

    
    return ''.join(res)

print(removeOuterParentheses("(()(()))"))
# "()(())"