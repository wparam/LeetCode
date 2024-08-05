# https://leetcode.com/problems/last-stone-weight/description/

def lastStoneWeight(stones) -> int:
    while True:
        highest = 0
        higher = 0

        index_highest, index_higher = 0, 0
        for i in range(len(stones)):
            if stones[i] > higher:
                higher = stones[i]
                index_higher = i
            
            if higher > highest:
                higher, highest = highest, higher
                index_higher, index_highest = index_highest, index_higher
        stones[index_highest] -= higher
        stones[index_higher] -= higher
        if higher == 0:
            return highest


print(lastStoneWeight([2,72]))