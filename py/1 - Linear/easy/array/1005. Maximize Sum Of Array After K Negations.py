# Given an integer array nums and an integer k, modify the array in the following way:

# choose an index i and replace nums[i] with -nums[i].
# You should apply this process exactly k times. You may choose the same index i multiple times.

# Return the largest possible sum of the array after modifying it in this way.
# https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/
 

# Example 1:

# Input: nums = [4,2,3], k = 1
# Output: 5
# Explanation: Choose index 1 and nums becomes [4,-2,3].
# Example 2:

# Input: nums = [3,-1,0,2], k = 3
# Output: 6
# Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
# Example 3:

# Input: nums = [2,-3,-1,5,-4], k = 2
# Output: 13
# Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
from typing import List

def largestSumAfterKNegations(nums: List[int], k: int) -> int:
    neg_ls = []
    sum_all = 0
    mini_abs = abs(nums[0])

    for i in nums:
        if i<0:
            neg_ls.append(i)
        
        sum_all += abs(i)
        if abs(i)<mini_abs:
            mini_abs = abs(i)
    if k < len(neg_ls):
        sorted_one = sorted(neg_ls)
        minus = 0
        for i in sorted_one[k:]:
            minus += i
        return sum_all + 2 * minus

    if (k - len(neg_ls)) % 2 == 0:
        return sum_all

    return sum_all - 2 * mini_abs


print(largestSumAfterKNegations(nums = [5,6,9,-3,3], k = 2))

