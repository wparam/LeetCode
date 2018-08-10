var quickSort = (arr, left, right) =>{
    if(left >= right)
        return;
    let pivot = arr[parseInt((left + right) / 2 )];

    let i  = left, j = right;
    while(arr[j] >= pivot && i<j){
        j--;
    }

    while(arr[i] <= pivot && i<j){
        i++;
    }

    if(i!==j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }



};  

//2,3,4,5,6,7,9,10,15,26,32
console.log(quickSort([7,9,4,2,5,6,10,3,32,15,26], 0, 10));