function isAnagram(s,t) {
    s=s.split("").sort().join("");
    t=t.split("").sort().join("");
    if(t==s)return true
      else return false
  };