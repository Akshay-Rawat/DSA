/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq=0
    let ans =0

    for(let i=0;i<nums.length;i++){
        if(nums[i]==ans){
            freq++
        }
        else if(freq==0){
            ans=nums[i]
        }else{
            freq--
        }
    }
    return ans
};