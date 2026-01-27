/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0
    let end = 0
    let maxLength = 0
    let sub = new Set()

    while(end<s.length){
        if(!sub.has(s[end])){
            sub.add(s[end])
            maxLength = Math.max(maxLength,sub.size)
            end++
        }
        else{
            sub.delete(s[start])
            start++
        }
    }
    return maxLength
};