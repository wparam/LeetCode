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



console.log(selectSort([4,2,1,3,7,4,8,4,6,9]));