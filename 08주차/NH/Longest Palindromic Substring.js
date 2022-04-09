function longestPalindrome(s) {
    let maxSub = '';
      
      function bubbleFromCenter(left, right){
          while(left >= 0 && right < s.length && s[left] === s[right]) {
              left--;
              right++;
          }
          return s.slice(left+1, right)
      }
      
      for(let i = 0; i < s.length; i++) {
          let sub1 = bubbleFromCenter(i, i);
          let sub2 = bubbleFromCenter(i, i+1);
          let sub = sub1.length > sub2.length ? sub1 : sub2
          if(sub.length > maxSub.length) {
              maxSub = sub
          }
      }
      return maxSub
  };