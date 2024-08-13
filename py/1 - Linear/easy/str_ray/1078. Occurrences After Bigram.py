# https://leetcode.com/problems/occurrences-after-bigram/description/

from typing import List
import re

def findOcurrences(text: str, first: str, second: str) -> List[str]:
    pattern = fr'\b{first} {second} (\w+)'
    res = []
    s = text    
    while True:
        match = re.search(pattern, s)

        if match:
            res.append(match.group(1))
            s = re.sub(fr'\b{first} {second}', '', s, 1)
            print(s)
        else:
            break
    
    return res

print(findOcurrences(text = "we we we we will rock you", first = "we", second = "we"))