'use strict';
/**
 * Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
 * Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.
 *  
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var deleteNode = function(node) {
    if(!node)
        return;
    if(node.next){
        node.val = node.next.val;
        node.next = node.next.next;
    }
};

var root= new ListNode(0);
var r1 = new ListNode(1);
var r2 = new ListNode(2);
var r3 = new ListNode(3);

root.next = r1;
//r1.next = r2;
//r2.next = r3;
deleteNode(root)
console.log(root);
