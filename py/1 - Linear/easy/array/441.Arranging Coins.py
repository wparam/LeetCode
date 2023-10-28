# You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

# Given the integer n, return the number of complete rows of the staircase you will build.

 
 
 
def arrangeCoins( n: int) -> int:
    sum = 0
    for i in range(1, n+1):
      if sum + i > n:
        return i - 1
      elif sum + i == n:
        return i
      else:
        sum += i
      
    return n 

print(arrangeCoins(8))