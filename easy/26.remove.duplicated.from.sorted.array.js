// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this in place with constant memory.
//
// For example,
// Given input array nums = [1,1,2],
//
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
   if (nums.length < 2) {
     return nums;
   }

   let i = 0;
   let prev = nums[0];

   for (let j = 0, n = nums.length; j < n; j++) {
     if (nums[j] !== prev) {
       nums[i] = prev;
       prev = nums[j];
       i++;
     }
   }

   nums[i] = prev;

   return i + 1;
 };
