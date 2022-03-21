function firstUniqChar(s) {
    let m = new Map()
     for (let i=0; i<s.length; i++) {
         if(m.has(s[i])){
             m.set(s[i],-1);
         }
         else{
             m.set(s[i],i)
             }
 }
  for(let num of m.values()){
      if(num!=-1)return num;
  }
  return -1;
};