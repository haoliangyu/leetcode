// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
//
// Note:
//
//    Each element in the result should appear as many times as it shows in both arrays.
//    The result can be in any order.
//
// Follow up:
//
//    What if the given array is already sorted? How would you optimize your algorithm?
//    What if nums1's size is small compared to nums2's size? Which algorithm is better?
//    What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

// It should be optimized by using other sorting algorithm
function mergeSort(array, lo, hi) {
  if (hi < lo + 2) { return array; }

  var mi = ((lo + hi) / 2) >> 0;
  mergeSort(array, lo, mi);
  mergeSort(array, mi, hi);
  merge(array, lo, mi, hi);

  return array;
}

function merge(array, lo, mi, hi) {
  var arrayLeft = array.slice(lo, mi);
  var arrayRight = array.slice(mi, hi);

  for (var i = 0, j = 0, k = lo, nLeft = arrayLeft.length, nRight = arrayRight.length; i < nLeft || j < nRight; ) {
    if (i < nLeft && (j === nRight || arrayLeft[i] <= arrayRight[j])) {
      array[k] = arrayLeft[i];
      i += 1;
      k += 1;
    }

    if (j < nRight && (i === nLeft || arrayLeft[i] > arrayRight[j])) {
      array[k] = arrayRight[j];
      j += 1;
      k += 1;
    }
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var sortedNums1 = mergeSort(nums1, 0, nums1.length);
  var sortedNums2 = mergeSort(nums2, 0, nums2.length);
  var intersection = [];

  for (var i = 0, j = 0, n1 = nums1.length, n2 = nums2.length; i < n1 && j < n2;) {
    if (sortedNums1[i] === sortedNums2[j]) {
      intersection.push(sortedNums1[i]);
      i += 1;
      j += 1;
      continue;
    }

    while (i < n1 && nums1[i] < nums2[j]) {
      i++;
    }

    while (j < n2 && nums2[j] < nums1[i]) {
      j++;
    }
  }

  return intersection;
};
