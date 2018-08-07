var insertSort = (arr) => {
    
}

var merge =  (arr, left, mid, right) => {
    let i = left, j = mid + 1;
    let temp = [];
    while(i <= mid || j <= right){
        if(arr[i] < arr[j]){
            temp.push(arr[i]);
            i++;
        }            
        else{
            temp.push(arr[j]);
            j++;
        }
    }
    if(i === mid)
        for(; j<= right; j++){
            temp.push(arr[j]);
        }
    else
        for(; i<= mid; i++){
            temp.push(arr[i]);
        }
    return temp;
}


console.log(insertSort([7,9,4,2,5,6,10,3,32,15,26]));