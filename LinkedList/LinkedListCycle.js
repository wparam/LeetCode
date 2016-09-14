//  Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space? 

/**[3,2,0,-4]
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
var util = require('util');
var hasCycle = function(head) {
    if(!head)
        return false;
    if(!head.next)
        return false;
    var second = head.next;
    head.next = null;
    while(second){
        if(second===head)
            return true;
        second = second.next;
    }  
    return false;
};

var a0 = {val: 3, next: a1};
var a1 = {val: 2, next: a2};
var a2 = {val: 0, next: a3};
var a3 = {val: -4, next:a1 };
console.log(util.inspect(hasCycle(a0), false, null));