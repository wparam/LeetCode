# https://leetcode.com/problems/greatest-common-divisor-of-strings/description/

import re

def gcdOfStrings_brute(str1: str, str2: str) -> str:
    base = str2 if len(str1) > len(str2) else str1

    while len(base) > 0:
        if re.fullmatch(fr'({base})+', str1) and re.fullmatch(fr'({base})+', str2):
            return base
        base = base[:-1]
    
    return ""

def gcdOfStrings(str1: str, str2: str) -> str:
    base = str2 if len(str1) > len(str2) else str1

    while len(base) > 0:
        if re.fullmatch(fr'({base})+', str1) and re.fullmatch(fr'({base})+', str2):
            return base
        base = base[:-1]
    
    return ""

print(gcdOfStrings(str1 = "LEET", str2 = "CODE"))