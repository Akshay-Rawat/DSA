/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     let ans = 0;

        for(let i of nums){
            ans = ans^i;

        }
        return ans
};