// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

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
var util = require('util');
var deleteDuplicates = function(head) {
    var headanchor = head;
    if(!head || !head.next)
        return head;
    while(head.next){
        if(head.next.val === head.val){
            if(!head.next.next)
                head.next = null;
            else
                head.next = head.next.next;
        }
        else
            head = head.next;
    }
    return headanchor;
};


var h2 = {val:2, next:null};
var h11 = {val:1, next:h2};
var h1 = {val:1, next:h11};
var h01 = {val:0, next:h1};
var h0 = {val: 0, next: h01};
console.dir(util.inspect(deleteDuplicates(h0), false, null));