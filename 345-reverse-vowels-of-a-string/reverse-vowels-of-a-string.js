/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
     let vowels=new Set('aeiouAEIOU') //creates set of unique vowels 
    s=s.split('')
    let i=0;  //left pointer
    let j=s.length-1  //right pointer
    while(j>i){
        while(!vowels.has(s[j]) && j>i){ 
            j--
        }
        while(!vowels.has(s[i]) && j>i){
            i++
        }
        if(vowels.has(s[i])&& vowels.has(s[j]) ){
            [s[i],s[j]]=[s[j],s[i]]
            i++;
            j--;
        }

    }
    return s.join('')
};