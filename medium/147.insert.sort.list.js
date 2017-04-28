// Sort a linked list using insertion sort.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let insertionSortList = function(head) {

  if (head === null) {
    return null;
  }

  let fakeHead = { next: head, val: -Infinity };
  let current = head;

  while (current.next !== null) {

    while (current.next && current.val <= current.next.val) {
      current = current.next;
    }

    if (current.next === null) {
      break;
    }

    let node = fakeHead;

    while (node.next.val < current.next.val) {
      node = node.next;
    }

    let toCut = current.next;

    current.next = current.next.next;

    toCut.next = node.next;
    node.next = toCut;
  }

  return fakeHead.next;
};
