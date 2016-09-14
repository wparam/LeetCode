//  Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed. 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var lk = require('../lib/linkedlist');
var swapPairs = function(head) {
    if(!head)
        return null;
    if(!head.next)
        return head;
    var cursor = head;
    var result = head.next;
    if(cursor.next){
        var temp = cursor.next;
        cursor.next = cursor.next.next;
        temp.next = cursor; 
    }
    if(cursor.next)
        cursor.next = swapPairs(cursor.next);
    return result;  
};

console.log(lk.Deserialize(swapPairs(lk.Serialize([2,1,3,4]))));