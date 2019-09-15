/**
 * Jose ring, 1-n stick, count to m, kick the stick out, start counting again, 
 * return the final stick no.
 * @param  {int} n
 * @param  {int} m
 */
export const JoseRing = (n, m) => {
    if(n <= 1)
        return n;
    let count = 0,
        kickNum = 0,
        arr = new Array(n);
    while(kickNum < n-1){
        while(count !== m){
            for(let i=0; i<n; ){
                if(arr[i]===-1){
                    continue;
                }
                i++;
            }
            
        }
        arr[i] = -1;
        count = 0;
        if(i<n-1)
            i++;
        else
            i = 0;
        kickNum++;
    }
    return arr.find(x=>x!==-1);
};


console.log(JoseRing(2, 1));


