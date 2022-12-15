/**
 * @param {string} s
 * @return {number}
 */
 function numDecodings(s) {
    let array = [1, 1, 2];
    let count = 0;
    let mul = 1;

    s = s.split("");

    if (s[0] === '0') {
        return 0;
    }

    if (Number(s) <= 10) {
        return 1;
    }

    if (s.length === 1) {
        return 1;
    }

    for (let i = 3; i <= s.length; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }

    for (let i = 0; i < s.length; i++) {
        
         if (s[i] == 0) {
                if (s[i - 1] <=2) {
                    if (i === s.length -1 && s[s.length - 1] == 0) {
                        count--;
                        mul *= array[count];
                        return mul;
                    }
                    s[i - 1] = 10;
                    s[i] = 9;
                    i--;
                    count--;
                } else {
                    return 0;
                }
        }

        if (s[i] <= 2) {
            count++;

            if (i === s.length - 1) {
                mul *= array[count];
                return mul;
            }
        } 

        if (s[i] > 2 && s[i] <= 6) {

            if (s[i -1] <= 2) {
                count++;
                mul *= array[count];
                count = 0;
            }
        }

        if (s[i] > 6 && s[i] < 10) {

            if (s[i - 1] == 1) {
                count++;
                mul *= array[count];
                count = 0;
            } else {
                mul *= array[count];
                count = 0;
            }
        }

    }
    
    return mul;
    };