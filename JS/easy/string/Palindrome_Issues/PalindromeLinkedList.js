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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head,
        slow = head;
    while(fast!==null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }
    let newlink = reverse(slow);
    while(head!==null && newlink!==null){
        if(head.val!== newlink.val){
            return false;
        }
        head = head.next;
        newlink = newlink.next;
    }
    return true;
};

var reverse = (head) => {
    let pre = null,
        cur = head;
    while(cur!==null){
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}