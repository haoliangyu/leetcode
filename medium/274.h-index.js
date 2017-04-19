// Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.
//
// According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."
//
// For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.
//
// Note: If there are several possible values for h, the maximum one is taken as the h-index.

/**
 * @param {number[]} citations
 * @return {number}
 */
let hIndex = function(citations) {

  let count = citations.length;
  let heap = new Heap(citations);
  let h = 0;

  for (let i = 1; i <= count; i++) {
    let c = heap.pull();
    let nextH = i > c ? c : i;

    if (nextH > h) {
      h = nextH;
    } else {
      return h;
    }
  }

  return h;
};

class Heap {

  constructor(data) {
    this._heapArray = data;
    this._size = data.length;

    let lastIndex = this._heapArray.length - 1;
    let lastInternal = (lastIndex & 1) === 0 ? ((lastIndex - 1) >> 1) : (lastIndex >> 1);

    for (let i = lastInternal; i >= 0; i--) {
      this._percolateDown(lastIndex, i);
    }
  }

  _swap(i, j) {
    let value = this._heapArray[i];
    this._heapArray[i] = this._heapArray[j];
    this._heapArray[j] = value;
  }

  _bigger(i, j) {
    return this._heapArray[i] > this._heapArray[j] ? i : j;
  }

  _isValid(n, i) {
    return 0 <= i && i <= n;
  }

  _properParent(n, i) {
    let leftChildIndex = (i << 1) + 1;
    let rightChildIndex = (i + 1) << 1;

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

  pull() {
    let maxValue = this._heapArray[0];
    this._swap(0, this._size - 1);
    this._percolateDown(this._size - 2, 0);
    this._size = this._size - 1;

    return maxValue;
  }
}
