/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let t = {};

    for(let i of s){
        t[i] = (t[i] || 0)+1;
    }

    for(let i= 0;i<s.length;i++){
        if(t[s[i]]===1){
            return i
        }
    }
    return -1
};