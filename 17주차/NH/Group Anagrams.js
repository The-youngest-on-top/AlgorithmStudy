 function groupAnagrams(strs){
     //빈배열 만들기
    let answer=new Array(strs.length);
    for(let j=0; j<answer.length; j++){
        answer[j]=new Array(2);
    }
    //strs에 인덱스 생성 
    strs=strs.map((item,index)=>[item,index++]);
    //원 배열과의 독립성을 위해 깊은 복사 메서드 사용 _.cloneDeep()
    let sample=_.cloneDeep(strs);
    
    for(let i=0; i<sample.length; i++)
        sample[i][0]=sample[i][0].split("").sort().join("");
    sample.sort((a,b)=>{
        if(a[0]>b[0]) return 1;
        else if(a[0]<b[0])return -1;
        else return 0;
    });

    let compare=sample[0][0];
    let k=0;
    for(let val of sample){
        if(compare==val[0]){
            answer[k].push(val[1]);    
        }
        else{
            k++;
            answer[k].push(val[1]);
            compare=val[0];
        }
    }
    //null제거
    for(let j=0; j<answer.length; j++){
     for(let i=0; i<answer[j].length; i++){
            if(answer[j][i]==null){
                answer[j].splice(i,1);
                i--;
            }
        }
    }
    //null제거
    answer=answer.sort((a,b)=>{
        if(a.length>b.length) return 1;
        else if(b.length>a.length) return -1;
        else return 0;
    }).filter((a)=>a.length>0);
    //원 배열과 비교하며 답 완성 
    for(let i=0; i<answer.length; i++){
        for(let j=0; j<answer[i].length; j++){
            for(let k=0; k<strs.length; k++){
                if(strs[k][1]==answer[i][j]){
                    answer[i][j]=strs[k][0];
                }
            }
        }
    }
    return answer;
};