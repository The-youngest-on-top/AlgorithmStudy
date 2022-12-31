class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:

        codeWords = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        
        uq = set()
        for word in words:
            this = []
            for c in word:
                this.append(codeWords[ord(c)-97])
            uq.add(''.join(this))
            
        return(len(uq))