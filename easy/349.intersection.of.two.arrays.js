// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
//
// Note:
//
//    Each element in the result must be unique.
//    The result can be in any order.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var dict = {};
    var match = [];

    for (var i = 0, n = nums1.length; i < n; i++) {
        dict[nums1[i]] = true;
    }

    for (var j = 0, m = nums2.length; j < m; j++) {
        if (dict[nums2[j]]) {
            match.push(nums2[j]);
            dict[nums2[j]] = false;
        }
    }

    return match;
};
