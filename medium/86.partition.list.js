// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
//
// You should preserve the original relative order of the nodes in each of the two partitions.
//
// For example,
// Given 1->4->3->2->5->2 and x = 3,
// return 1->2->2->4->3->5.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
let partition = function(head, x) {

  if (head === null) {
    return head;
  }

  let less = { next: null };
  let lessHead = less;

  let larger = { next: null };
  let largerHead = larger;

  let node = head;

  while (node !== null) {
    if (node.val < x) {
      less.next = node;
      less = less.next;
    } else {
      larger.next = node;
      larger = larger.next;
    }

    node = node.next;
  }

  larger.next = null;
  less.next = largerHead.next;

  return lessHead.next;
};
