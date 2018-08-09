var quickSort = (arr, left, right) =>{
    let pivot = arr[0];
    let i = left, j = right;
    if(left >= right)   
        return;
    while(i!==j){
        while(arr[j] >= pivot && i<j)
            j--;
        while(arr[i] <= pivot && i<j)
            i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    arr[0] = arr[i];
    arr[i] = pivot;
    quickSort(arr, left, i-1);
    quickSort(arr, i+1, right);
    return arr;
};

//2,3,4,5,6,7,9,10,15,26,32
console.log(quickSort([7,9,4,2,5,6,10,3,32,15,26], 0, 10));