/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 function canConstruct(ransomNote, magazine) {
    let dic = {}
    let answer = true
    magazine.split('').map((i)=>{
        if(i in dic) dic[i] = dic[i]+1;
        else dic[i] = 1;
    })
    ransomNote.split('').map((i)=>{
        if(!(i in dic) || dic[i] <= 0) answer = false;
        else dic[i] = dic[i] - 1;
    })
    return answer
};