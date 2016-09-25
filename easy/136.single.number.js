// Given an array of integers, every element appears twice except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var table = {};

    for (var i = 0; i < nums.length; i++) {
        if (table[nums[i]]) {
            table[nums[i]] += 1;
        } else {
            table[nums[i]] = 1
        }
    }

    var keys = Object.keys(table);
    for (var j = 0; j < keys.length; j++) {
        if (table[keys[j]] === 1) {
            return Number(keys[j]);
        }
    }
};
