//Change a array into column wise
//E.g: input array: [0,1,2,3,4,5,6,7,8,9,10], columns: 3
//output [0, 4, 8 ]
//       [1, 5, 9 ]
//       [2, 6, 10]
//       [3, 7,   ]
function reOrderArray(arr, colsize){
    if(!arr || arr.length === 0 || !colsize)
        return [];
    if(arr.length<=colsize)
        return arr;
    var result = [],
        colno = Math.ceil(arr.length / colsize);
    for(var i = 0, l=arr.length; i<l; i++){
        var remder = i % colno; 
        if(result[remder] === undefined)
            result[remder] = [];
        result[remder].push(arr[i]);
    }
    return Array.prototype.concat.apply([], result);
};