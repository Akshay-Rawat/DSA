/**
 * @param {number[]} M
 * @param {number[]} N
 * @return {number[]}
 */
var fairCandySwap = function(M,N) {
    const sumM =M.reduce((a,b)=>a+b)
    const sumN =N.reduce((a,b)=>a+b)
   const diff = (sumM-sumN)/2;
   for(const m of M){    
   for(const n of N){    
    if(m-n ===diff) return [m,n];
   }
   }
};