# https://leetcode.com/problems/valid-boomerang/description/


from typing import List

def isBoomerang(points: List[List[int]]) -> bool:
    x1 = points[0]

    if points[0][0] == points[1][0] == points[2][0]:
        return False
    
    if points[1][0] != x1[0]:
        x2 = points[1]
        x3 = points[2]
    else:
        x2 = points[2]
        x3 = points[1]
    print(x1)
    print(x2)
    print(x3)
    print((x2[1] - x1[1]) * x3[0] / (x2[0] - x1[0]) + x1[1] - (x2[1]-x1[1]) * x1[0] / (x2[0] - x1[0]))

    return (x2[1] - x1[1]) * x3[0] / (x2[0] - x1[0]) + x1[1] - (x2[1]-x1[1]) * x1[0] / (x2[0] - x1[0]) != x3[1]

    
    
print(isBoomerang([[0,2],[2,1],[1,1]]))