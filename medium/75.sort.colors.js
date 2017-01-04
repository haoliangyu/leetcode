// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//
// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//
// Note:
// You are not suppose to use the library's sort function for this problem.

function swap(array, i, j) {
  var value = array[i];
  array[i] = array[j];
  array[j] = value;
}

function getParentIndex(i) {
  if ((i & 1) === 0) {
    return (i - 1) >> 1;
  }

  return i >> 1;
}

function getLeftChildIndex(i) {
  return (i << 1) + 1;
}

function getRightChildIndex(i) {
  return (i + 1) << 1;
}

function bigger(array, i, j) {
  return array[i] > array[j] ? i : j;
}

function isValid(n, i) {
  return 0 <= i && i <= n;
}

function properParent(array, n, i) {
  let leftChildIndex = getLeftChildIndex(i);
  let rightChildIndex = getRightChildIndex(i);

  if (isValid(n, leftChildIndex) && isValid(n, rightChildIndex)) {
    return bigger(array, i, bigger(array, leftChildIndex, rightChildIndex));
  } else if (!isValid(n, leftChildIndex) && isValid(n, rightChildIndex)) {
    return bigger(array, i, rightChildIndex);
  } else if (!isValid(n, rightChildIndex) && isValid(n, leftChildIndex)) {
    return bigger(array, i, leftChildIndex);
  }

  return i;
}

function percolateDown(array, n, i) {
  let j = properParent(array, n, i);

  while (j !== i) {
    swap(array, i, j);
    i = j;
    j = properParent(array, n, i);
  }
}

function heapify(array) {
  let lastIndex = array.length - 1;
  let lastInternal = getParentIndex(lastIndex);

  for (let i = lastInternal; i >= 0; i--) {
    percolateDown(array, lastIndex, i);
  }
}

function pullMax(array, n) {
  let maxValue = array[0];
  swap(array, 0, n);
  percolateDown(array, n - 1, 0);

  return maxValue;
}

function sort(array) {
  heapify(array);

  for(let n = array.length - 1; n >= 0; n--) {
    let maxValue = pullMax(array, n);
    array[n] = maxValue;
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = nums => {
  sort(nums);
};
