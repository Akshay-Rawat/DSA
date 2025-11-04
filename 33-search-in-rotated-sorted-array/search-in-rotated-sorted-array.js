/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let first=0,last=nums.length-1
    while(first<=last){
        let mid = Math.floor((first+last)/2)
        if(nums[mid] == target) return mid;
        if(nums[first]<=nums[mid]){
            if(target>=nums[first]&&target<=nums[mid]) last=mid;
            else first=mid+1;
        }else{
            if(target>=nums[mid+1]&&target<=nums[last]) first=mid+1;
            else last=mid;
        }
    }
    return -1
};