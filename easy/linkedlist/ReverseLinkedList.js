// Reverse a singly linked list.

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
'use strict';
var util = require('util');
const List = require('../../lib/linkedlist');
var reverseList = function(head) {
    if(!head)
        return null;
    if(!head.next)
        return head;
    var col = [head];
    var cursor = head.next;
    while(!!cursor){
        col.push(cursor);
        cursor = cursor.next;
    }
    head.next = null;
    var result = col.pop(),
         backcursor = result;
    while(col.length>0){
        backcursor.next = col.pop();
        backcursor = backcursor.next;
    }
    return result;
};

//while
var reverse1 = (head) => {
    let pre = null;
    let cur = head;
    while(cur!==null){
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
};

//recurse
var reverseRec = (head) => {
    if(head.next === null)
        return head;
    let nextNode = head.next;
    head.next = null;
    let reverseNext = reverseRec(nextNode);
    nextNode.next = head;
    return reverseNext;
};


//Bad recurse
var reverseRec1 = (head) => {
    let r = reverse2(head);
    r.node.next = null;
    return r.head;
};

var reverse2 = (head) => {
    if(head.next === null){
        return { head: head, node: head};
    }
    let ret = reverse2(head.next);
    ret.node.next = head;
    return {head: ret.head, node: head};
}

console.log(List.Deserialize(
    reverseRec(List.Serialize([1,2,3,4]))
));