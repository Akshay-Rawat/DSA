/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let st = 0
    let end = nums.length -1
  while(st <= end) {
        let mid = Math.floor((st+ end) / 2)
        if (target == nums[mid]) return mid;

        if(nums[st]<=nums[mid]){
         if (target >= nums[st] && target <= nums[mid])  end = mid ;
         else st =mid+1
        }
        else{
         if(target>=nums[mid+1] && target<=nums[end]) st=mid+1;
         else end =mid
        }
    }
    return -1
};