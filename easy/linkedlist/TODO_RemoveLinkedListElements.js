// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5
const util = require('util');
function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

var removeElements = function(head, val) {
    if(!head)
        return null;
    if(!head.next && head.val === val)
        return null;
    if(!head.next)
        return head;
    let parent = head;    
    let node = head.next;
    while(node!==null){
        if(node.val === val){
            parent.next = node.next;
            node = node.next;
            continue;
        }
        parent = node;
        node = node.next;
    }
    if(head.val === val){
        return head.next;
    }
    return head;
};



//TODO
// public ListNode removeElements(ListNode head, int val) {
//     if (head == null) return null;
//     head.next = removeElements(head.next, val);
//     return head.val == val ? head.next : head;
// }

var n1 = new ListNode(7, null);
var n2 = new ListNode(6, n1);
var n3 = new ListNode(6, n2);
var n4 = new ListNode(5, n3);
var n5 = new ListNode(4, n4);
var n6 = new ListNode(3, n5);
var n7 = new ListNode(2, n6);
var n8 = new ListNode(1, n7);

console.log(util.inspect(n8, false, null))
console.log(util.inspect(removeElements(n8, 6), false, null));
