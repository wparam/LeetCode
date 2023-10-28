# The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
# such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

from typing import List

def fib_old(n: int) -> int:
  if n <= 0:
    return 0
  if n == 1: 
    return 1
  return fib(n-1) + fib(n-2)



def fib(n: int) -> int:
  if n<=1:
    return n
  
  l1 = 0
  l2 = 1
  for i in range(1, n):
    l1, l2 = l2, l1 + l2
  return l2

print(fib(2))
print(fib(3))
print(fib(4))
print(fib(5))
print(fib(6))
