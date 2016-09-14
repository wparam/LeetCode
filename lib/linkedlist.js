'use strict';



class ListNode{
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

class List{
    constructor(){
        this.nodes = [];
    }
    add(node){
        this.node[this.node.length-1].next=node;
        this.node[this.node.length]=node;
    }
    delete(){

    }
    static Serialize(arr){
        var result = [];
        var root = new ListNode(0, null);
        var current = root;
        for(var i=0, l=arr.length; i<l; i++){
            current.next = new ListNode(arr[i], null);
            current = current.next;
        }
        return root.next; 
    }
    static Deserialize(head){
        var arr = [];
        while(head){
            arr.push(head.val);
            head = head.next;
        }
        return arr;
    }
    static Log(head){

    }
}

module.exports = List;

