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

var h2 = {val:2, next:null};
var h1 = {val:1, next:h2};
var h0 = {val: 0, next: h1};
console.dir(util.inspect(h0, false, null));
console.dir(util.inspect(reverseRec(h0), false, null));
// console.dir(util.inspect(reverseList(h0).next, false, null));
// console.dir(util.inspect(reverseList(h0).next.next, false, null));