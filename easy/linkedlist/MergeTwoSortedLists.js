// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
'use strict';
var util = require('util'),
    LinkList = require('../lib/linkedlist');
var mergeTwoLists = function(l1, l2) {
    if(!l1)
        return l2;
    if(!l2)
        return l1;
    var c1 = l1,
        c2 = l2,
        result = [],
        ASD = true;
    while(c1){
        result.push(c1);
        c1 = c1.next;
    } 
    while(c2){
        result.push(c2);
        c2 = c2.next;
    }
    result.sort(function(a, b){
        if(a.val > b.val)
            return 1;
        if(a.val < b.val)
            return -1;
        return 0;
    });
    for(var i=0,l=result.length;i<l;i++){
        if(i<l-1)
            result[i].next = result[i+1];
        else
            result[i].next = null;
    }
    return result[0];
};


var h2 = {val:5, next:null};
var h1 = {val:3, next:h2};
var h0 = {val:1, next: h1};

var a2 = {val:6, next:null};
var a1 = {val:4, next:a2};
var a0 = {val:2, next: a1};

// console.log(LinkList.Deserialize(a0));
// console.log(util.inspect(LinkList.Serialize([2,4,6]), false, null));

// console.dir(util.inspect(mergeTwoLists(LinkList.Serialize([-10,-9,-6,-4,1,9,9]), LinkList.Serialize([[-5,-3,0,7,8,8]])), false, null));
console.dir(LinkList.Deserialize(mergeTwoLists(LinkList.Serialize([-10,-9,-6,-4,1,9,9]), LinkList.Serialize([-5,-3,0,7,8,8]))));