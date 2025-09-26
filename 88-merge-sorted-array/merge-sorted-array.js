/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i=j=k=0
  let temp=[]

  while(i<m && j<n){
    if(nums1[i]<nums2[j]){
        temp[k++]=nums1[i++]
    }else{
        temp[k++]=nums2[j++]
    }
  }  
  while(i<m){
    temp[k++]=nums1[i++]
  }
  while(j<n){
    temp[k++]=nums2[j++]
  }
 for (let x = 0; x < m + n; x++) {
    nums1[x] = temp[x];
  }
};