var assert = require('assert');

const testArrayLength = 200;

class SortValidate{
    constructor() {
    }
    generateSeeds(){
        let seeds = [],
            l = testArrayLength;
        for(let i=0; i<l; i++){
            seeds.push(
                parseInt(Math.random() * l * 8)
            );
        }
        return seeds;   
    }
    check(sortFunc, ...params){
        let seeds = this.generateSeeds();
        let correct = seeds.slice().sort((a,b) => {
            return a > b ? 1 : ((a ===b ) ? 0 : -1);
        });
        if(typeof sortFunc !== 'function'){
            console.error('Input Sort Func is not right');
            return;
        }
        let remoteResult = sortFunc(seeds, ...params);
        assert.strictEqual(remoteResult.length, correct.length, 'Compare failed, length not equal');

        for(let i=0, l=correct.length; i<l; i++){
            if(remoteResult[i]!==correct[i]){
                console.log(seeds.join(','));
                console.log(remoteResult.join(','));
                console.log(correct.join(','));
                
                assert.strictEqual(false, true, `Not equal on item index: ${i}`);
            }
        }
        console.log('Compare Success');
    }
}

var comp = new SortValidate();

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
        // console.log(`left=${left}, right=${right}, pivot=${pivot}, pivotIdx=${pivotIdx}`);
        while(i <= j){
            //this i===j is used to do compare arr[j] > pivot one more time, since wen i and j 
            //are moved together from last compare like this:
            //15  62  13 --
            //|       |
            //i       j
            //after swap it is 13  62  15, so i and j both point to 62, now we need test 62 is 
            //bigger than pivot or not, so i<=j here, we have to do another test when i===j, 
            //otherwise 62 won't be determined, since i and j are moved to 62 inevitablly
            while(i<=j && arr[j]>pivot)
                j--;
            while(i<=j && arr[i]<pivot)
                i++;
            //when i===j at this point, it means arr[i]==arr[j]==pivot, i and j point to pivot or same value with pivot
            //the reason for i<=j instead of i<j, is used to prevent infinite loop, since when program reach this point,
            //i could equal to j and both arr[i] and arr[j] equals to pivot, this leads to infinite loop
            if(i <= j){
                swap(arr, i, j);
                j--;
                i++;
            }
            if(i-2 === j && pivot !== arr[i-1]){
                console.log('never happend');
            }
        }
        //after the loop, i and j have the below relation:
        //1: j = i - 1, either last move was made by i or j
        //2: j = i - 2, this is because 
        if(left < i-1)
            quickSort3(arr, left, i - 1);
        // else
            // console.log(`left gt than j: left=${left}, j=${j}, i=${i}`);
        if( i < right)
            quickSort3(arr, i, right);
        return arr;
    };

    return quickSort3;
})();

//wait after finish tree
var hashSort = (arr) =>{

}

for(let i=0; i<10; i++){
    comp.check(quickSort, 0, testArrayLength - 1);
    comp.check(quickSort, 0, testArrayLength - 1);
}

console.log(quickSort([30,7,34,34], 0, 3));