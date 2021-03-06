// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Note: reverse version, this changes the input
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
};

var reverseLink = (head) => {
    if(head.next === null)
        return head;
    let node = reverseLink(head.next);
    node.next = head;
};