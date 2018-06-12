var assert = require('assert');

var swap = (arr, i , j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

var bubbleSort = (arr) => {
    let temp = 0;
    for(let i = 0, l = arr.length; i<l; i++){
        for(let j = i; j<l; j++){
            if(arr[i] > arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
};  

var selectSort = (arr) => {
    let min = 0, temp = 0;
    for(let i = 0, l = arr.length - 1; i<l; i++){
        min = i;
        for(let j = i+1, jl=arr.length; j<jl; j++ ){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
};

var insertSort = (arr) => {
    for(let i = 1, l = arr.length; i<l; i++){
        let temp = arr[i];
        for(var j = i-1; j >= 0 && arr[j]>temp; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = temp;
    }
    return arr;
};

var mergeSort = (arr, left, right) => {
    if(left >= right)
        return;
    let mid = parseInt( (left + right) / 2 );
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    mergeArray(arr, left, mid, right);

    //[left, mid], [mid+1, right]
    function mergeArray(arr, left, mid, right){
        let i = left, j = mid + 1;
        let temp = [], k = 0;
        //after below while, i or j must bigger than their boundary
        while( i <= mid && j <= right ) {
            if(arr[i]<arr[j]){
                temp[k++] = arr[i++];
            }else{
                temp[k++] = arr[j++];
            }
        }
        while(i<=mid)
            temp[k++] = arr[i++];
        while(j<=right)
            temp[k++] = arr[j++];
        for(let i = left; i<=right; i++)
            arr[i] = temp[i-left];
    };
    return arr;
};

var bucketSort = (arr) => {
    let bucket = [],
        result = [];
    for(let i = 0,l=arr.length; i<l; i++){
        if(bucket[arr[i]] === undefined){
            bucket[arr[i]] = 1; 
        }
        else{
            bucket[arr[i]]++;
        }
    }
    for(let i=0, l=bucket.length; i<l; i++){
        if(bucket[i]!==undefined)
            for(let j = 0; j<bucket[i]; j++)
                result.push(i);
    }
    return result;
};

var quickSort = (() => {
    //When choose the most left one as pivot
    var quickSort1 = (arr, left, right) => {
        if(left >= right)
            return;
        var pivot = arr[left];
        let i = left, j = right;
        while(i !== j){
            while(i < j && arr[j] >= pivot){
                j--;
            }
            while(i < j && arr[i] <= pivot){
                i++;
            }
            if(i!==j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        arr[left] = arr[i];
        arr[i] = pivot;

        quickSort(arr, left, i-1);
        quickSort(arr, i+1, right);

        return arr;
    };

    //pivot = arr[right]
    var quickSort2 = (arr, left, right) => {
        if( left >= right )
            return;
        let i = left, j = right;
        let pivot = arr[right];
        while(i !== j){
            while(i < j && arr[i]<=pivot)
                i++;
            while(i < j && arr[j]>=pivot)
                j--;
            if(i !== j){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        //exchange pivot
        arr[right] = arr[i];
        arr[i] = pivot;
        quickSort2(arr, left, i-1);
        quickSort2(arr, i+1, right);
        return arr;
    };

    //pivot = Math.floor(right + left)
    //when pivot is not leftmost nor rightmost, it is 
    var quickSort3 = (arr, left, right) => {
        if(left >= right)
            return;
        let i = left, j = right;
        let pivotIdx = Math.floor((left + right)/2);
        let pivot = arr[pivotIdx];
        console.log(`left=${left}, right=${right}, pivot=${pivot}, pivotIdx=${pivotIdx}`);
        while(i <= j){
            while(i<=j && arr[j]>pivot)
                j--;
            while(i<=j && arr[i]<pivot)
                i++;
            console.log(`i=${i}, j=${j}`);
            console.log(arr);
            if(i <=j){
                swap(arr, i, j);
                //if cursor includes pivot, then need ++ after swap
                j--;
                i++;
            }
        }
        console.log(arr);
        if(left < i -1)
            quickSort3(arr, left, i - 1);
        if( i < right)
            quickSort3(arr, i, right);
        return arr;
    };

    return quickSort3;
})();



console.log(quickSort([6,22,1,3,7,11,8,10,4,9,12,4,15,62,13,2], 0, 15));