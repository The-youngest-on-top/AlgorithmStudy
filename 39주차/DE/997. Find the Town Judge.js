/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n, trust) {
    if(n===1) return 1
    let trusts = new Array(n+1).fill(0)
    let citizen = []
    trust.forEach((e)=>{
        trusts[e[1]] = trusts[e[1]]+1 
        citizen.push(e[0])
        })

    citizen = [...new Set(citizen)]
    let judge = []
    trusts.forEach((e, i)=>{
        if(e === n-1) judge.push(i)
    })

    let answer = []
    for(let i = 0; i < judge.length; i++){
        if(citizen.indexOf(judge[i]) < 0){
            answer.push(judge[i])
        }
    }
    
    if(answer.length !== 1) return -1
    else return answer[0]
    
};