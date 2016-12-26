// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
//
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
//
// You may assume that each input would have exactly one solution.
//
// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
   let n = numbers.length;

   let binarySearch = (upper, lower, target) => {
     while (lower + 1 < upper) {
       let middle = (upper + lower) >> 1;

       if (target < numbers[middle]) {
         upper = middle;
       } else {
         lower = middle;
       }
     }

    if (numbers[lower] === target) {
        return lower;
    } else if (numbers[upper] === target) {
        return upper;
    }

     return -1;
   };

   for (let i = 0; i < n && numbers[i] <= target; i++) {
     let searchTarget = target - numbers[i];
     let mate = binarySearch(n - 1, i  + 1, searchTarget);

     if (mate > -1) {
       return [i + 1, mate + 1];
     }
   }

   return [];
 };
