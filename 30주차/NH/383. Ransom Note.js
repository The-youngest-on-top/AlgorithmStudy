function canConstruct(ransomNote, magazine) {
    ransomNote=ransomNote.split("");
    magazine=magazine.split("");

    for(let i=0; i<ransomNote.length; i++){
        if(!(magazine.includes(ransomNote[i]))){
            return false;
        }
        magazine.splice(magazine.indexOf(ransomNote[i]),1);
    }
    return true;
};