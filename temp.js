var insertSort = (arr) => {
    for(let i = 0, l = arr.length; i<l; i++){
        let min = Number.MAX_SAFE_INTEGER;
        let min_indx = -1;
        for(let j = i; j<l; j++){
            if(arr[j] < min){
                min = arr[j];
                min_indx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_indx];
        arr[min_indx] = temp;

    }
    return arr;
}


console.log(insertSort([7,9,4,2,5,6]));