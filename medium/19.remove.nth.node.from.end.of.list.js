// Given a linked list, remove the nth node from the end of list and return its head.
//
// For example,
//
//    Given linked list: 1->2->3->4->5, and n = 2.
//
//    After removing the second node from the end, the linked list becomes 1->2->3->5.
//
// Note:
// Given n will always be valid.
// Try to do this in one pass.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {

  let node = head;

  while (n > 1) {
    node = node.next;
    n--;
  }

  let prevDelete = null;
  let toDelete = head;

  while (node.next !== null) {
    node = node.next;
    prevDelete = toDelete;
    toDelete = toDelete.next;
  }

  if (prevDelete === null) {
    return toDelete.next;
  } else {
    prevDelete.next = toDelete.next;
  }

  return head;
};
