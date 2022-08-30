/**
 * @param {number} n
 * @return {number[][]}
 */
 function generateMatrix(n) {
    let l = 0 
    let r = n-1
    let t = 0
    let b = n-1
    let d = 0
    let arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let num = 1
            
    while(l<=r && t<=b){
        if(d==0){
            for(let i=l; i<=r; i++){
                arr[t][i]= num
                num++   
            }
            d=1
            t++
            
        }else if(d==1){
            for(let i=t; i<=b; i++){
                arr[i][r] = num
                num++
            }
            d=2
            r--
        }else if(d==2){
            for(let i=r; i>=l; i--){
                arr[b][i] = num
                num++
            }
            d=3
            b--
        }else if(d==3){
            for(let i=b; i>=t; i--){
                arr[i][l]= num
                num++
            }
            d=0
            l++  
        }
    }
    return arr

};