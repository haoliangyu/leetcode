// Given a non-empty array of integers, return the k most frequent elements.
//
// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].
//
// Note:
//
//    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
//    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

class Heap {

  constructor(data) {
    this._heapArray = [];
    this._size = 0;

    if (data) {
      this.heapify(data);
    }
  }

  size() {
    return this._size;
  }

  _swap(i, j) {
    let value = this._heapArray[i];
    this._heapArray[i] = this._heapArray[j];
    this._heapArray[j] = value;
  }

  _getParentIndex(i) {
    if ((i & 1) === 0) {
      return (i - 1) >> 1;
    }

    return i >> 1;
  }

  _getLeftChildIndex(i) {
    return (i << 1) + 1;
  }

  _getRightChildIndex(i) {
    return (i + 1) << 1;
  }

  _bigger(i, j) {
    return this._heapArray[i].priority > this._heapArray[j].priority ? i : j;
  }

  _isValid(n, i) {
    return 0 <= i && i <= n;
  }

  _properParent(n, i) {
    let leftChildIndex = this._getLeftChildIndex(i);
    let rightChildIndex = this._getRightChildIndex(i);

    if (this._isValid(n, leftChildIndex) && this._isValid(n, rightChildIndex)) {
      return this._bigger(i, this._bigger(leftChildIndex, rightChildIndex));
    } else if (!this._isValid(n, leftChildIndex) && this._isValid(n, rightChildIndex)) {
      return this._bigger(i, rightChildIndex);
    } else if (!this._isValid(n, rightChildIndex) && this._isValid(n, leftChildIndex)) {
      return this._bigger(i, leftChildIndex);
    }

    return i;
  }

  _percolateDown(n, i) {
    let j = this._properParent(n, i);

    while (j !== i) {
      this._swap(i, j);
      i = j;
      j = this._properParent(n, i);
    }
  }

  heapify(array) {
    this._heapArray = array;
    this._size = array.length;

    let lastIndex = this._heapArray.length - 1;
    let lastInternal = this._getParentIndex(lastIndex);

    for (let i = lastInternal; i >= 0; i--) {
      this._percolateDown(lastIndex, i);
    }
  }

  pull() {
    let maxValue = this._heapArray[0];
    this._swap(0, this._size - 1);
    this._percolateDown(this._size - 2, 0);
    this._size--;

    return maxValue;
  }

  getKMax(n) {
    if (n === undefined) {
      n = 1;
    }

    let results = [];

    for (let i = 0; i < n && this._size > 0; i++) {
      results.push(this.pull());
    }

    return results;
  }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}t
 */
var topKFrequent = function(nums, k) {

  let count = {};

  nums.forEach(value => {
    if (count[value] === undefined) {
      count[value] = 1;
    } else {
      count[value] = count[value] + 1;
    }
  });

  let data = [];

  for (let num in count) {
    data.push({ value: Number(num), priority: count[num] });
  }

  let heap = new Heap(data);

  return heap.getKMax(k).map(item => item.value);
};
