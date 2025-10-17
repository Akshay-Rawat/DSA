/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let temp=[]
    let n = candyType.length
    let count = 0
    for(let i of candyType){
        if(temp.indexOf(i)==-1){
            temp.push(i)
        }
    }
    
return Math.min(temp.length, candyType.length / 2);


};