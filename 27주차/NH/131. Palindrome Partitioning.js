function partition(s) {
    let partition=[];
    let output=[];
    function isPalin(letters){
        if(letters.split("").reverse().join("")==letters)return true;
        return false;        
    }
    function dfs(str,start,part,result){
        if(start==str.length){
            result.push([...part]);
            return ;
        }
        for(let i=start+1; i<=str.length; i++){
            let target = str.substring(start,i);
            if(isPalin(target)){
                part.push(target);
                dfs(str,i,part,result);
                part.pop();
            }
        }
    }
    
    dfs(s,0,partition,output);
    return output;
};