// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var dict = {};

    for (var i = 0, n = nums.length; i < n; i++) {
        if (dict[nums[i]]) {
            return true;
        } else {
            dict[nums[i]] = true;
        }
    }

    return false;
};
