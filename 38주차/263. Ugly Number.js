/**
 * @param {number} n
 * @return {boolean}
 */
function isUgly(n) {

    if (n <= 0) {
        return false;
    }

    for (let i = 2; i <= n; i++) {
        if (i > 5) {
            return false;
        }

        if (n % i === 0) {
            n = n / i;
            i--;
        }
    }

   return true;
};