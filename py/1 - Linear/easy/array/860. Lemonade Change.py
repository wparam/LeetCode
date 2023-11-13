# At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time 
# (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. 
# You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

# Note that you do not have any change in hand at first.

# Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer 
# with the correct change, or false otherwise.
from typing import List

def lemonadeChange(bills: List[int]) -> bool:
  if bills[0] != 5:
    return False
  
  earnings = {5: 0, 10: 0, 20: 0}
  for i in range(len(bills)):
    earnings[bills[i]] += bills[i]
    
    if bills[i] == 5:
      continue
    elif bills[i] == 10:
      earnings[5] -= 5
    else:
      if earnings[10]>0:
        earnings[10] -= 10
      else:
        earnings[5] -= 10
      earnings[5] -= 5
      
    if earnings[5]<0 or earnings[10]<0:
      return False
  return True
    
print(lemonadeChange([5,5,5,10,5,5,10,20,20,20]))