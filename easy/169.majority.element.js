// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var stats = {};
    var target = Math.floor(nums.length / 2);
    var count, value;

    for (var i = 0, n = nums.length; i < n; i++) {
        value = nums[i];
        count = stats[value];
        if (!count) {
            stats[value] = 1;
        } else {
            stats[value] = count + 1;
        }
    }

    var values = Object.keys(stats);
    var maxValue;
    var maxCount = 0;

    for (i = 0, n = values.length; i < n; i++) {
        value = values[i];
        count = stats[value];

        if (count > maxCount) {
            maxCount = count;
            maxValue = value;
        } else if (count === maxCount && value > maxValue) {
            maxValue = value;
        }
    }

    return Number(maxValue);
};
