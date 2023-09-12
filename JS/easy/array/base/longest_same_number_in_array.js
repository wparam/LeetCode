//find the longest same number (char) in a array

var findLongest = (arr) => {
    let map = new Map();
    let longest = 1;
    for(let i = 0, l = arr.length; i<l; i++){
        if(map.has(arr[i])){
            let v = map.get(arr[i]);
            map.set(arr[i], ++v);
            longest = Math.max(longest, v);
        }else{
            map.set(arr[i], 1);
        }
    }
    return longest;
};

console.log(findLongest([1,2,3,4,5,6,2,1,5,2]));