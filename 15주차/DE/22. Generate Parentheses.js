/**
 * @param {number} n
 * @return {string[]}
 */



 function generateParenthesis(n) {
    let result = []
    
    function dfs(left, right, str) {
        if(left == n && right == n){
            return result.push(str)
        }
        if(left > right){
            right < n && dfs(left, right + 1, str + ')')
            left < n &&  dfs(left + 1, right, str + '(')
        }
        else if(left == right){
            left < n && dfs(left + 1, right, str + '(')
        }
    }
    dfs(0, 0, '');
    return result;
};