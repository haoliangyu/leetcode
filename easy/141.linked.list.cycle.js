// Given a linked list, determine if it has a cycle in it.
//
// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) {
    return false;
  }

  if (!head.next) {
    return false;
  }

  let nodeA = head.next;
  let nodeB = head.next.next;

  while (nodeB) {
    if (nodeA === nodeB) {
      return true;
    }

    nodeA = nodeA.next;

    if (nodeB.next && nodeB.next.next) {
      nodeB = nodeB.next.next;
    } else {
      nodeB = null;
    }
  }

  return false;
};
