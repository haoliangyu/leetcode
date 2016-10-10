/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var count = {};
  var intersection = [];
  var value;

  for (var i = 0, n = nums1.length; i < n; i++) {
    value = count[nums1[i]];
    if (value) {
      count[nums1[i]] = value + 1;
    } else {
      count[nums1[i]] = 1;
    }
  }

  for (var j = 0, m = nums2.length; j < m; j++) {
    value = count[nums2[j]];
    if (value) {
      intersection.push(nums2[j]);
      count[nums2[j]] = value - 1;
    }
  }

  return intersection;
};
