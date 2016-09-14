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
        for(var i=0, l=arr.length; i<l; i++)
            result.push(new ListNode(arr[i], null));
        
        
    }
    static Deserialize(){
        var arr = [];


        return arr;
    }
}


