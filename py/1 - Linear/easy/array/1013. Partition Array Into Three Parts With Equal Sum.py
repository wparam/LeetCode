# Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

# Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

# https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/description/

def canThreePartsEqualSum( arr) -> bool:
    if sum(arr) % 3 != 0:
        return False
    
    avg = sum(arr) // 3

    count = 0
    sum_temp = 0
    for swi in range(len(arr)):
        sum_temp += arr[swi]
        if sum_temp == avg:
            count += 1
            sum_temp = 0

        if count == 3:
            return True

    return count == 3

print(canThreePartsEqualSum([2,9,-5,7,-10,-3,-5,4,4,6,-6,-10,4]))