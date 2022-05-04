const L = {
    '2':"abc",
    '3':"def",
    '4':"ghi",
    '5':"jkl",
    '6':"mno",
    '7':"pqrs",
    '8':"tuv",
    '9':"wxyz"
   }

function letterCombinations(D) {
let len = D.length, answer = [];
if (!len) return [];

const dfs = (pos, str) => {
 if (pos === len) answer.push(str);
 else {
     let letters = L[D[pos]];
     for (let i = 0; i < letters.length; i++)
         dfs(pos+1,str+letters[i]);
 }
}
dfs(0,"");
return answer;
};

