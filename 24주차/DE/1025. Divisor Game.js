/**
 * @param {number} n
 * @return {boolean}
 */
 function divisorGame(n) {
    let turn = false
    let bool = true
    while(true){
        bool = true
        for(let i = 1; i < n; i++){
            if(n % i == 0){
                n = n - i
                console.log(n)
                turn = !turn
                bool = false
                break
            }
        }
        if(bool){
            return turn
        }
    }
};