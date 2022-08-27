/**
 * @param {string} s
 * @return {string[][]}
 */
 function partition(s) {
    // 딴 사람 코드,, 모르겠음
    let res = [];
    let n =s.length;
    // backtracking
    
    function isPalindrome(str){
        let len = str.length;
        let mid = parseInt(len/2);
        for(let i=0;i<mid;i++){
            if(str[i]!==str[len-1-i]) return false;
        }
        return true;
    }
    
    function helper(str,temp){
        
        // base case
        if(str.length===0) { res.push([...temp]); return;}
        
        for(let i=0;i<str.length;i++){
            let subStr = str.slice(0,i+1);
            if(isPalindrome(subStr)){
            temp.push(subStr);
            let rem = str.slice(i+1);
            helper(rem,temp);
              temp.pop();
            }
            
        }
        
    }
    helper(s,[]);
    return res;
};