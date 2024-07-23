# The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

# For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
# Given an integer n, return its complement.

 

# Example 1:

# Input: n = 5
# Output: 2
# Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

# https://leetcode.com/problems/complement-of-base-10-integer/description/


def bitwiseComplement(n: int) -> int:
    original = bin(n)[2:]

    comp = int(f'0b{"1"*len(original)}',2)

    return n ^ comp