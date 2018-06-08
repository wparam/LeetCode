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


console.log(mergeSort([4,2,1,3,7,4,8,4,6,9], 0, 9));