//find top3 and bottom 3
var multipleMaxInArray = (arr) => {
    let max1 = max2 = Number.MIN_SAFE_INTEGER;
    let min1 = min2 = Number.MAX_SAFE_INTEGER;
    for(let i=0, l=arr.length; i<l; i++){
        if(arr[i]>=max1){
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        }else if(arr[i] >= max2){
            max3 = max2;
            max2 = arr[i];
        }else if(arr[i] >= max3){
            max3 = arr[i];
        }

        if(arr[i] <= min1){
            min2 = min1;
            min1 = arr[i];
        }else if(arr[i] <= min2){
            min2 = arr[i];
        }
    }
    return [min1, min2, max1, max2, max3];
};

console.log(multipleMaxInArray([3,1,65,4,2,21,7,2, 0, -1,-10,-5]));
console.log(multipleMaxInArray([3,1,65,4,2,21,7,2,7,8,1,13,25,78]));