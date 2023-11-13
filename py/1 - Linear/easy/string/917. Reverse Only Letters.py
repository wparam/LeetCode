# Given a string s, reverse the string according to the following rules:

# All the characters that are not English letters remain in the same position.
# All the English letters (lowercase or uppercase) should be reversed.
# Return s after reversing it.


# Example 1:

# Input: s = "ab-cd"
# Output: "dc-ba"
# Example 2:

# Input: s = "a-bC-dEf-ghIj"
# Output: "j-Ih-gfE-dCba"
# Example 3:

# Input: s = "Test1ng-Leet=code-Q!"
# Output: "Qedo1ct-eeLg=ntse-T!"


def reverseOnlyLetters(s: str) -> str:
	lst = list(s)
	left, right = 0, len(lst) - 1
	while left < right:
		while left < right and not (lst[left].isalpha() and lst[left].isascii()):
			left += 1
		while left < right and not (lst[right].isalpha() and lst[right].isascii()):
			right -= 1
		lst[left], lst[right] = lst[right], lst[left]
  
		if left < right:
			left += 1

		if left < right:
			right -= 1
	return ''.join(lst)

print(reverseOnlyLetters("Test1ng-Leet=code-Q!"))